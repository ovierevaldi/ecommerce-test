'use server'

import { redirect } from "next/navigation";
import { SignInProp, SignInZodSchema, SignUpProp } from "./types"

export const handleUserSignIn = async (signInProp: SignUpProp, formData: FormData):Promise<SignInProp> => {
    
    const signInData = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    const validationResult = SignInZodSchema.safeParse(signInData);
    if(!validationResult.success){
        return {error: validationResult.error.flatten().fieldErrors};
    }
    
    const result = await signInUser(validationResult.data);

    // if(result)
    //     redirect('/auth/')
}

async function signInUser(data: {username: string, password: string}): Promise<SignUpProp>{
    const axios = require('axios');
    try {
        const response = await axios.post('http://localhost:3000/auth', {
            username: data.username,
            password: data.password
        })
        
        return {onSuccess: {isSuccess: true, data: response.data.acesss_token}, message: 'Success Login User'}
    } catch (error) {
        console.log(error)
        return {onSuccess: {isSuccess: false}, message: 'Cannot Login User with error: ' + error}
    }
}