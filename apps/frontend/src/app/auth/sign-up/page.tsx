import SignUpForm from '@/components/auth/SignUpForm'
import Link from 'next/link'
import React from 'react'

export default function SignUpPage() {
  return (
    <div>
        <div className='mb-10 xl:mb-20'>
            <p className='text-xl text-center py-4 font-bold sm:text-3xl xl:text-4xl'>Create Account</p>
            <p className='text-center text-xs sm:text-base text-gray-500 xl:text-lg max-w-xs sm:max-w-sm xl:max-w-lg mx-auto'>Fill your information below or register with your social account</p>
        </div>
        <SignUpForm />
        <p className='text-center text-xs sm:text-base mt-10 text-gray-500 xl:text-lg'>Back to <Link href={'/auth'} className='underline text-primary'>Login</Link></p>
    </div>
  )
}
