// Icons
import arrowLeft from '@/../public/icons/arrow-right.svg'

import Image from 'next/image'
import React from 'react'

// Components
import CartProductButton from '@/components/CartProductButton'
import { Button } from '@/components/ui/button'

export default function UserCart() {
  return (
    <div>
      <p className='text-2xl font-bold text-center'>Your Cart</p>
      <div className='grid grid-cols-2'>
        <div className=''>
          <CartProductButton></CartProductButton>
          <CartProductButton></CartProductButton>
          <CartProductButton></CartProductButton>
          <CartProductButton></CartProductButton>
        </div>
        <div className='text-center'>
          <p className='text-2xl font-bold'>Order Summary</p>
          <div className=''>
            <div className='border-b'>
              <div className='flex justify-between'>
                <span>Subtotal</span>
                <span className='font-bold'>Subtotal</span>
              </div>
              <div className='flex justify-between'>
                <span>Subtotal</span>
                <span className='font-bold'>Subtotal</span>
              </div>
              <div className='flex justify-between'>
                <span>Subtotal</span>
                <span className='font-bold'>Subtotal</span>
              </div>
            </div>

            <div>
              <p>Total: <span className='font-bold'>RP.381032</span></p>
              <Button className='w-full h-12'>Buy <Image src={arrowLeft} alt=''></Image></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
