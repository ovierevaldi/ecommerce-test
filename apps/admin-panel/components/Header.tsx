// Icons
import userIcon from '@/public/icons/user.svg'
import powerIcon from '@/public/icons/power.svg'

import React from 'react'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { getSession } from '@/lib/session-provider'
import Link from 'next/link'

export default async function Header() {
  const userSession = await getSession();

  return (
    <div className='grid grid-cols-3 items-center border-b'>
      <div className='col-span-1'>
      </div>
      <p className='text-3xl text-center p-5 font-semibold col-span-1'>Admin Page</p>

      <div className='col-span-1 text-right pr-4'>
        {
          userSession && 
          <DropdownMenu>
            <DropdownMenuTrigger> 
              <div className='flex gap-x-2 rounded-md items-center'>
                <span>{userSession.username} </span>
                <div className='rounded-full border p-2'>
                  <Image src={userIcon} width={25} alt='account icon'/> 
                </div>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='min-w-[200px] -translate-x-4 translate-y-1 bg-gray-300 bg-opacity-70 text-start px-4 py-2 rounded-lg'>
              <DropdownMenuLabel className=''>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem className='mt-4 py-2'>
                <div className='flex gap-x-2'>
                  <Image src={powerIcon} width={20} alt='account icon'/>  
                    <Link href={'/api/auth/logout'}>Log Out</Link> 
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        }
      </div>
    </div>
  ) 
}
