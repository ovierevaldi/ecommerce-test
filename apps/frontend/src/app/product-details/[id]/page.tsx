// Icons
import plusIcon from '@/../public/icons/plus.svg'
import minusIcon from '@/../public/icons/minus.svg'

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function page({params}: {params: {id: string}}) {
  return (
    <div className='grid grid-cols-[0.75fr_1fr] gap-x-12'>
      <div>
        <Image src={'/images/phoenix-dorninger-fIrxV9vk37s-unsplash.jpg'} width={1000} height={200} alt='' className='mb-4 rounded-lg' />
        <Carousel>
          <CarouselContent>
            <CarouselItem className='basis-1/3'>
              <button >
                <Image src={'/images/phoenix-dorninger-fIrxV9vk37s-unsplash.jpg'} width={1000} height={200} alt='' className='rounded-md'/>
              </button>
            </CarouselItem>  
            <CarouselItem className='basis-1/3'>
              <Image src={'/images/phoenix-dorninger-fIrxV9vk37s-unsplash.jpg'} width={1000} height={200} alt='' className='rounded-md'/>
            </CarouselItem>  
            <CarouselItem className='basis-1/3'>
              <Image src={'/images/phoenix-dorninger-fIrxV9vk37s-unsplash.jpg'} width={1000} height={200} alt='' className='rounded-md' />
            </CarouselItem>          
            <CarouselItem className='basis-1/3'>
              <Image src={'/images/phoenix-dorninger-fIrxV9vk37s-unsplash.jpg'} width={1000} height={200} alt=''className='rounded-md'/>
            </CarouselItem>  
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className='p-4'>
        <p className='font-semibold text-3xl text-center mb-3'>Product Title</p>
        <p className='text-lg'>
            Elevate your style with our Premium Leather Wallet, crafted from genuine full-grain leather for a sleek and timeless look. Designed for durability and convenience, this wallet features multiple card slots, a secure zippered coin pocket, and a spacious bill compartment. Its slim profile fits comfortably in any pocket, making it the perfect accessory for daily use or special occasions. 
            Ideal for anyone who values both style and functionality, our wallet offers a touch of elegance and unmatched quality.
        </p>
        <br />

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
