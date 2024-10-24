// Icons
import plusIcon from '@/../public/icons/plus.svg'
import minusIcon from '@/../public/icons/minus.svg'

import Image from 'next/image'
import React from 'react'

// Components
import { Button } from '@/components/ui/button'

export default function CartProductButton() {
  return (
    <div className='grid grid-cols-2'>
        <Image src={'/images/phoenix-dorninger-fIrxV9vk37s-unsplash.jpg'} width={200} height={200} alt='' className='mb-4 rounded-t-md' />
        <div>
          <p className='font-semibold text-lg text-center mb-3'>Product Title</p>
            <div className='p-4 border rounded-md space-y-6 '>
                <div className='flex justify-between gap-x-3 items-center max-w-[150px]  px-4 py-2 rounded-lg mx-auto'>
                  <button className='border'>
                    <Image src={minusIcon} alt='minus icon' width={30}></Image>
                  </button>
                  <span className='text-lg'>0</span>
                  <button className='border'>
                    <Image src={plusIcon} alt='plus icon' width={30}></Image>
                  </button>
                </div>

                <Button className='w-full h-14'>+ Keranjang</Button>
                <Button className='w-full h-14' variant={'outline'}>Beli</Button>
            </div>
        </div>
    </div>
  )
}
