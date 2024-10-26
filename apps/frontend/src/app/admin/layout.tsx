import { getAdminSession } from '@/lib/admin-session'
import { redirect } from 'next/navigation'

export default async function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    // const adminSession = await getAdminSession()

    // if(adminSession){
    //   redirect('/admin/auth');
    // }
    // else{
    //   redirect('/admin/dashboard')
    // }

    return (
      <div>
        {children} 
      </div>
    );
}