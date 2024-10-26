import { UserSessionProp } from '@/types/type';
import * as jose from 'jose'
import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';

const privateKey = process.env.SESSION_KEY;
const encodedKey = new TextEncoder().encode(privateKey)
const expiredAt = new Date(Date.now() + (24 * 60 * 60 * 1000));

export async function createSession(data: any){
    const session = await new jose.SignJWT(data).setProtectedHeader({alg: 'HS256'}).setExpirationTime(expiredAt).setIssuedAt().sign(encodedKey);

    const cookie = await cookies();
    cookie.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiredAt,
        sameSite: 'strict',
        path: '/'
    })
}

export async function getSession(): Promise<UserSessionProp>{
    const cookie = (await cookies()).get('session')?.value;

    if(!cookie)
        return null;

    else{
        try {
            const { payload } = await jose.jwtVerify(cookie, encodedKey, {algorithms: ['HS256']});
            return payload as UserSessionProp;
        } catch (error) {
            console.log(error);
            redirect('/auth')
        }
    } 
}

export async function deleteSession(){
    (await cookies()).delete('session');
}