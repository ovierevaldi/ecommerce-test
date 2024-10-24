'use client'

import React, { PropsWithChildren } from 'react'

// Components
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export default function RegisterButton({children}: PropsWithChildren) {
  const { pending } = useFormStatus(); 
  
  return (
    <Button
      className='w-full rounded-full py-5 text-sm sm:text-base sm:h-12 xl:text-lg xl:h-14'
      disabled={ pending }
      type='submit'>
      {pending ? 'Registering...' : children}
    </Button>
  )
}
