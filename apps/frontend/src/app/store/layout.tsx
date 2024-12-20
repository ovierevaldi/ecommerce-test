// Icons
import searchIconWhite from '@/../public/icons/search-white.svg'

// Components
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import {
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue,
} from "@/components/ui/select"
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="max-w-6xl mx-auto">
        <Header />
        <div className="max-w-6xl mx-auto">
        <div className='flex items-center justify-between'>
            <div className="flex gap-x-3 items-center">
                <Input type="text" placeholder="Search..." className='max-w-[250px] h-10'/>
                <button className='rounded-full border p-3 bg-primary'>
                    <Image src={searchIconWhite} alt='cart icon' height={25}></Image>
                </button>
            </div>

            <p className='text-2xl font-semibold italic'>
                    On Sale!
            </p>

            <div>
                <Select>
                    <SelectTrigger className="w-[180px] h-10">
                            <SelectValue placeholder="Order By" />
                    </SelectTrigger>
                    <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            

        </div>
        <div className='px-6 py-16'>
            {children}
        </div>
        </div>
        <Footer></Footer>
    </div>
    );
  }

