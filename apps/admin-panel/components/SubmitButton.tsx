'use client'

import React, { PropsWithChildren } from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({children}: PropsWithChildren) {
    const { pending } = useFormStatus();

    return (
    <button 
        type='submit'
        className='bg-green-500 h-12 text-white rounded-2xl min-w-44 hover:bg-green-600 text-lg disabled:bg-green-700'
        disabled={pending}>
        {pending ? 'Submitting...' : children}
    </button>
   
  )
}
