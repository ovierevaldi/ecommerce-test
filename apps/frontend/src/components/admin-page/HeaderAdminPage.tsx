// Icons
import userIcon from '@/../public/icons/user.svg'
import powerIcon from '@/../public/icons/power.svg'

import React from 'react'
import Image from 'next/image'

// Components
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function HeaderAdminPage() {
  return (
    <div className='grid grid-cols-3 items-center border-b'>
      <div className='col-span-1'>

      </div>
      <p className='text-3xl text-center p-5 font-semibold col-span-1'>Admin Page</p>

      <div className='col-span-1 text-right pr-4'>
        <DropdownMenu>
          <DropdownMenuTrigger> 
            <div className='flex gap-x-2 rounded-md items-center'>
              <span> Username</span>
              <div className='rounded-full border p-2'>
                <Image src={userIcon} width={25} alt='account icon'/> 
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='min-w-[180px] -translate-x-4 translate-y-1'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='p-2'>
              <span> Log Out</span> <Image src={powerIcon} width={20} alt='account icon'/> 
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ) 
}
