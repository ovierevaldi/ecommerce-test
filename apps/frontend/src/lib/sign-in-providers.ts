'use server'

import { redirect } from "next/navigation";
import { SignInProp, SignInZodSchema,  } from "./types"

import jwt from 'jsonwebtoken'
import { createSession } from "./user-session";

export const handleUserSignIn = async (signInProp: SignInProp, formData: FormData):Promise<SignInProp> => {
    
    const signInData = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    const validationResult = SignInZodSchema.safeParse(signInData);
    if(!validationResult.success){
        return {error: validationResult.error.flatten().fieldErrors};
    }
    
    const result = await signInUser(validationResult.data);
    if(!result?.isFailApi){
        await createSession(result?.data)
        redirect('/')
    }
}

async function signInUser(data: {username: string, password: string}): Promise<SignInProp>{
    const axios = require('axios');
    try {
        const response = await axios.post('http://localhost:3000/auth', {
            username: data.username,
            password: data.password
        })
        return {isFailApi: false, message: 'Success Login User', data: response.data}
    } 
    catch (error) {
        return {isFailApi: true, message: 'Cannot Login User'}
    }
}