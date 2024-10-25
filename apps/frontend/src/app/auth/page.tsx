import SignInForm from '@/components/auth/SignInForm'
import Link from 'next/link'
import React from 'react'

export default function AuthenticateUserPage() {
  return (
    <main>
        <div className='mb-10 xl:mb-20'>
            <p className='text-xl text-center py-4 font-bold sm:text-3xl xl:text-4xl'>Sign In</p>
            <p className='text-center text-xs sm:text-base text-gray-500 xl:text-lg'>Hi! Welcome back, you've been missed</p>
        </div>
    
        <SignInForm />

        <p className='text-center text-xs sm:text-base mt-10 text-gray-500 xl:text-lg'>
            Dont have account? &nbsp;
            <Link href={'/auth/sign-up'} className='underline text-primary'>Sign Up</Link>
        </p>
    </main>
  )
}
