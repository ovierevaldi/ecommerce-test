import { AuthType } from '@/enum/enums';
import React from 'react'
import SubmitButton from './SubmitButton';

export default function RegisterPage({ handleChangeAuth } : {handleChangeAuth: (state: AuthType) => void;}) {
    return (
    <div className='flex flex-col items-center'>
         <p className="text-4xl text-green-500 font-bold py-6">Register</p>

         <span className='text-gray-500 py-4'>Please fill up the information</span>

         <form action="" className='min-w-96 space-y-7 flex flex-col items-center my-10'>
            <div>
                <input 
                    type="text" 
                    name='username'
                    placeholder='Username'
                    autoComplete='username'
                    className='block h-12 text-lg min-w-80 bg-slate-300 bg-opacity-20 p-2' />
            </div>
            <div>
                <input 
                    type="text" 
                    name='fullName'
                    placeholder='Full Name' 
                    autoComplete='name'
                    className='block h-12 text-lg min-w-80 bg-slate-300 bg-opacity-20 p-2' />
            </div>
            <div>
                <input 
                    type="password" 
                    name='password'
                    placeholder='Password' 
                    autoComplete="new-password"
                    className='block h-12 text-lg min-w-80 bg-slate-300 bg-opacity-20 p-2' />
            </div>
            <SubmitButton>Register</SubmitButton>
         </form>

         <p onClick={() => handleChangeAuth(AuthType.Login)} className='hover:underline text-gray-500 mt-2 hover:cursor-pointer'>-{'>'}Back to login</p>
    </div>
    )
}
