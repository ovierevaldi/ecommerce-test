// Icons
import productIcon from "@/../public/icons/product.svg"
import orderIcon from "@/../public/icons/order.svg"
import userIconWhite from "@/../public/icons/user-white.svg"

import HeaderAdminPage from "@/components/admin-page/HeaderAdminPage";
import Image from 'next/image'

// Components
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import FooterAdminPage from "@/components/admin-page/FooterAdminPage";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div>
        <HeaderAdminPage />
        <div className='grid h-screen'>
          <div className="grid grid-cols-6">
            <div className="col-span-1 border-r ">
                <p className='text-center border-b p-4 mb-4 text-xl font-semibold '>
                  <Link href={'/admin'} className="hover:border px-5 py-2 rounded-md">Dashboard</Link>
                </p>

                <div className="p-4">
                  <Link href={'/admin/manage-products'}>
                    <Button className='text-xl w-full h-12 mb-6'>
                        <Image src={productIcon} alt='product icon'/>
                        <span className='min-w-20 text-start pl-2'>
                          Product
                        </span>
                    </Button>
                  </Link>

                  <Link href={'/admin/manage-orders'}>
                    <Button className='text-xl w-full h-12 mb-6'> 
                        <Image src={orderIcon} alt='product icon'/> 
                        <span className='min-w-20 text-start pl-2'>Orders</span>
                    </Button>
                  </Link>

                  <Link href={'/admin/manage-users'} className='flex w-full justify-center'>
                    <Button className='text-xl w-full h-12 mb-6'>
                        <Image src={userIconWhite} alt='product icon'/> 
                        <span className='min-w-20 text-start pl-2'>Users</span>
                    </Button>
                  </Link>
                </div>

            </div>
            <div className='col-span-5 '>
              {children}
            </div>
          </div>
        </div>
        <FooterAdminPage />
    </div>
    );
  }