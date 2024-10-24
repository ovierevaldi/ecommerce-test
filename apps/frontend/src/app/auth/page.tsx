import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export default function AuthenticateUserPage() {
  return (
    <main>
        <div className='mb-10 xl:mb-20'>
            <p className='text-xl text-center py-4 font-bold sm:text-3xl xl:text-4xl'>Sign In</p>
            <p className='text-center text-xs sm:text-base text-gray-500 xl:text-lg'>Hi! Welcome back, you've been missed</p>
        </div>

        <div className='space-y-6 xl:space-y-10 max-w-md mx-auto sm:max-w-lg'>
            <div className=''>
                <p className='text-sm mb-2 sm:text-base xl:text-lg'>Email</p>
                <Input type="email" placeholder="example@gmail.com" className='rounded-full sm:h-12 xl:h-14 xl:text-lg p-6'/>
            </div>

            <div className='text-sm'>
                <p className='text-sm mb-2 sm:text-base'>Password</p>
                <Input type="password" placeholder="********" className='rounded-full sm:h-12 xl:h-14 xl:text-lg p-6'/>
            </div>

            <div className=''>
                <p className='text-right text-primary text-xs sm:text-base xl:text-lg'>Forgot Password</p>
            </div>
            <Button className='w-full rounded-full py-5 text-sm sm:text-base sm:h-12 xl:text-lg xl:h-14'>Sign In</Button>
        </div>

            <p className='text-center text-xs sm:text-base mt-10 text-gray-500 xl:text-lg'>Dont have account? <Link href={'/auth/signup'} className='underline text-primary'>Sign Up</Link></p>
    </main>
  )
}
