'use server'

import { SignUpProp, SignUpZodSchema } from "./types"

// const axios = require('axios');

export const handleUserSignUp = async (signUpProp: SignUpProp, formData: FormData):Promise<SignUpProp> => {
    
    const signUpData = {
        username: formData.get('username'),
        fullname: formData.get('fullname'),
        password: formData.get('password'),
        termsandcondition: formData.get('termsandcondition')
    }

    const validationResult = SignUpZodSchema.safeParse(signUpData);

    console.log(formData.get('termsandcondition'))

    if(!validationResult.success){
        return {error: validationResult.error.flatten().fieldErrors};
    }
}

// async function registerUser(){
//     console.log(username, password, fullName)
//     try {
//         const response = await axios.post('http://localhost:3000/user', {
//             username: username,
//             fullname: fullName,
//             password: password
//         })
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }