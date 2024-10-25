'use server'

import { redirect } from "next/navigation";
import { SignUpProp, SignUpZodSchema } from "./types"

export const handleUserSignUp = async (signUpProp: SignUpProp, formData: FormData):Promise<SignUpProp> => {
    
    const signUpData = {
        username: formData.get('username'),
        fullname: formData.get('fullname'),
        password: formData.get('password'),
    }

    const validationResult = SignUpZodSchema.safeParse(signUpData);

    if(!validationResult.success){
        return {error: validationResult.error.flatten().fieldErrors};
    }
    
    const result = await registerUser(validationResult.data);

    if(result)
        redirect('/auth/')
}

async function registerUser(data: {username: string, fullname: string, password: string}): Promise<SignUpProp>{
    const axios = require('axios');
    try {
        await axios.post('http://localhost:3000/user', {
            username: data.username,
            fullname: data.fullname,
            password: data.password
        })
        return {success: true, message: 'Success Registering User'}
    } catch (error) {
        return {success: false, message: 'Cannot Create User with error: ' + error}
    }
}