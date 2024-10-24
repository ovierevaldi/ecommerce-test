// Icons
import userIconWhite from '@/../public/icons/user-white.svg'
import powerIcon from '@/../public/icons/power.svg'
import shopIcon from '@/../public/icons/shop.svg'
import clockIcon from '@/../public/icons/clock.svg'
import cartIconWhite from '@/../public/icons/cart-white.svg'

import React from 'react'

// components
import { Button } from "@/components/ui/button";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const itemCategories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Health & Beauty",
    "Sports & Outdoors",
];

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-3 items-center border-b bg-primary'>
        <div className='col-span-1 pl-4'>
          <Image src={shopIcon} alt='shop icon' width={50}></Image>
        </div>
        <p className='text-3xl text-center p-5 font-semibold col-span-1 text-white'>Website Title</p>

        <div className='col-span-1 text-right pr-4'>
          <DropdownMenu>
            <DropdownMenuTrigger> 
              <div className='flex gap-x-2 rounded-md items-center text-white'>
                <div className='rounded-full border p-3 bg-primary'>
                  <Image src={cartIconWhite} alt='cart icon' height={25}></Image>
                </div>

                <div className='rounded-full border p-2'>
                  <Image src={userIconWhite} width={25} alt='account icon'/> 
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='min-w-[180px] -translate-x-4 translate-y-1'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='p-2'>
                <Link href={'/purchase-history/'}>
                  <Image src={clockIcon} width={20} alt='account icon'/> <span> Purchase History</span> 
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='p-2'>
                <Link href={'/purchase-history/'}>
                  <Image src={powerIcon} width={20} alt='account icon'/> <span> Log Out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex justify-around p-4 border-b mb-4">
            {
              itemCategories.map((value) => {
                    return <Button key={value} className="p-4 bg-primary text-2xl hover:underline h-10">{value}</Button>
              })
            }
      </div>
</div>
  )
}
