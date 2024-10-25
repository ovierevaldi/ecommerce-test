'use server'

import * as jose from 'jose'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type UserSession = {
    username: string,
    fullname: string,
    birthDate: Date | null,
    access_token: string
}

const secretKey = process.env.SESSION_PRIVATE_KEY;
const encodedKey = new TextEncoder().encode(secretKey)

export async function createSession(data: UserSession){
    const expiredAt = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000));

    const session = await new jose.SignJWT(data)
                    .setProtectedHeader({alg: 'HS256'})
                    .setExpirationTime(expiredAt)
                    .setIssuedAt()
                    .sign(encodedKey);

    const cookie = await cookies();
    cookie.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiredAt,
        sameSite: 'lax',
        path: '/'
    })
}

export async function getSession(){
    const sessionCookie = (await cookies()).get('session')?.value;
    
    if(!sessionCookie)
        return null;

    try {
        const { payload } =  await jose.jwtVerify(sessionCookie, encodedKey, {algorithms: ['HS256']})
        return payload as UserSession
    } catch (error) {
        console.log(error);
        redirect('/auth/')
    }
}