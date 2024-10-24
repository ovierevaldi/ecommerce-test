'use client'

import React, { useActionState } from 'react'

//Components
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import RegisterButton from './RegisterButton'
import { handleUserSignUp } from '@/lib/sign-up-provider'

export default function SignUpForm() {
    const [state, signUp] = useActionState(handleUserSignUp, undefined)

    return (
        <form 
            action={signUp}
            className='space-y-6 sm:space-y-8 xl:space-y-10 max-w-md mx-auto sm:max-w-lg'
        >
            <div className=''>
                <p className='text-sm mb-2 sm:text-base xl:text-lg'>Username</p>
                <Input 
                    type="text" 
                    name='username' 
                    placeholder="johndoe" 
                    className='rounded-full sm:h-12 xl:h-14 xl:text-lg p-6 mb-2' />
                    {
                        state?.error?.username ? 
                        state.error.username.map((error, index) => 
                            <p key={index} className='px-6 text-sm text-rose-500'>{error}</p>
                        ) : ''
                    }
                
            </div>

            <div className=''>
                <p className='text-sm mb-2'>Full Name</p>
                <Input 
                    type="text" 
                    name='fullname' 
                    placeholder="John Doe" 
                    className='rounded-full sm:h-12 xl:h-14 xl:text-lg p-6 mb-2'/>

                {
                    state?.error?.fullname ? 
                    state.error.fullname.map((error, index) => 
                        <p key={index} className='px-6 text-sm text-rose-500'>{error}</p>
                    ) : ''
                }
            </div>

            <div className='text-sm'>
                <p className='text-sm mb-2'>Password</p>
                <Input 
                    type="password" 
                    name='password'
                    autoComplete=''
                    placeholder="********"
                    className='rounded-full sm:h-12 xl:h-14 xl:text-lg p-6 mb-2'/>
                
                {
                    state?.error?.password ? 
                    state.error.password.map((error, index) => 
                        <p key={index} className='px-6 text-sm text-rose-500'>{error}</p>
                    ) : ''
                }
            </div>

            <RegisterButton>Register</RegisterButton>
        </form>
    )
}
