'use server'

import { redirect } from "next/navigation";
import { SignInProp, SignUpProp, SignUpZodSchema } from "./types"

export const handleUserSignIn = async (signInProp: SignUpProp, formData: FormData):Promise<SignInProp> => {
    
    const signInData = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    const validationResult = SignUpZodSchema.safeParse(signInData);

    if(!validationResult.success){
        return {error: validationResult.error.flatten().fieldErrors};
    }
    
    const result = await signInUser(validationResult.data);

    if(result)
        redirect('/auth/')
}

async function signInUser(data: {username: string, fullname: string, password: string}): Promise<SignUpProp>{
    const axios = require('axios');
    try {
        await axios.post('http://localhost:3000/auth', {
            username: data.username,
            fullname: data.fullname,
            password: data.password
        })
        return {success: true, message: 'Success Login User'}
    } catch (error) {
        return {success: false, message: 'Cannot Login User with error: ' + error}
    }
}