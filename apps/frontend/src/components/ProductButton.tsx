'use client'

import React from 'react'
import Image from "next/image";
import { Card, CardContent} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function ProductButton({id}: {id: string}) {
    const router = useRouter()

    function handleOnButtonClick(){
        router.push('product-details/' + id)
    }

    return (
        <button onClick={handleOnButtonClick}>
            <Card className='w-fit hover:shadow-lg hover:transform hover:scale-110 hover:transition-transform hover:cursor-pointer'>
                <CardContent className='p-3 min-h-[300px]'>
                    <Image src={'/images/phoenix-dorninger-fIrxV9vk37s-unsplash.jpg'} width={200} height={200} alt='' className='mb-4 rounded-t-md' />
                    <div className='flex flex-col'>
                        <p className='mb-2 text-center text-lg'>Product Title</p>
                        <p className='mb-2 text-center font-bold'>RP. 123809</p>
                    </div>
                </CardContent>
            </Card>
        </button>
    )
}
