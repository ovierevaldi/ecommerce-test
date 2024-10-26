'use server'

import { LogInSchema } from "@/schema/schemas"
import { redirect } from "next/navigation";
import { createSession } from "./session-provider";

type ZodLoginErrorProp = {
    error?: {
        username?: string[],
        password?: string[],
    },
    message?: string,
} | undefined

export async function handleSignIn(state: ZodLoginErrorProp, formData: FormData): Promise<ZodLoginErrorProp>{
    const validateForm = LogInSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password')
    });

    if(!validateForm.success){
        return {error: validateForm.error.flatten().fieldErrors};
    }
    
    const signInResult = await signIn(validateForm.data);
    
    if(!signInResult.isSuccess){
        return {message: signInResult.message}
    }

    await createSession(signInResult.payload);
    redirect('/')
}

async function signIn(data: {username: string, password: string}): Promise<{isSuccess: boolean, message?: string, payload?: string}> {
    const axios = require('axios');
    try {
        const response = await axios.post('http://localhost:3000/admin/auth', {
            username: data.username,
            password: data.password
        });
        return {isSuccess: true, payload: response.data}
    } 
    catch (error: any) {
        console.log(error)
        return {isSuccess: false, message: 'Something went wrong, Please try again later or contact the admin'}
    }
}