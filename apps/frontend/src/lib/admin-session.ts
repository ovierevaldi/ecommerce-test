import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';

const secretKey = process.env.SESSION_ADMIN_PRIVATE_KEU;
const encodedKey = new TextEncoder().encode(secretKey)

export async function getAdminSession(){
    const cookie = (await cookies()).get('admin-session')?.value;

    if(!cookie)
        return null;
    else{
        try {
            const payload = await jwtVerify(cookie, encodedKey, {algorithms: ['HS256']})
            return payload;
        } catch (error) {
            console.log(error);
            redirect('/admin/auth'); 
        }
    }
}