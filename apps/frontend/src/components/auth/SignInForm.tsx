'use client'

import React, { useActionState } from 'react'
import { Input } from '../ui/input'
import RegisterButton from './FormButton'
import { handleUserSignIn } from '@/lib/sign-in-providers'

export default function SignInForm() {
    const [state, signIn] = useActionState(handleUserSignIn, undefined);

    return (
        <form 
            action={signIn}
            className='space-y-6 xl:space-y-10 max-w-md mx-auto sm:max-w-lg'>
            <div className=''>
                <p className='text-sm mb-2 sm:text-base xl:text-lg'>Username</p>
                <Input 
                    type="username" 
                    placeholder="example@gmail.com" 
                    className='rounded-full sm:h-12 xl:h-14 xl:text-lg p-6'
                />
            </div>

            <div className='text-sm'>
                <p className='text-sm mb-2 sm:text-base'>Password</p>
                <Input 
                    type="password" 
                    placeholder="********" 
                    className='rounded-full sm:h-12 xl:h-14 xl:text-lg p-6'
                />
            </div>

            {/* <div className=''>
                <p className='text-right text-primary text-xs sm:text-base xl:text-lg'>Forgot Password?</p>
            </div> */}

            <RegisterButton>Login</RegisterButton>
        </form>
    )
}
