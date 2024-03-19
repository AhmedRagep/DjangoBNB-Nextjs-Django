import Image from 'next/image';
import Link from 'next/link';
import SearchFilters from './SearchFilters';
import UserNav from './UserNav';
import AddPropertyButton from './AddPropertyButton';
import { getUserId } from '@/app/lib/actions';

const Navbar = async () => {
  // جلب رقم اليوزر في متغير
  const userId = await getUserId();
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] max-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt='Django Logo'
              width={150} 
              height={35} >
            </Image>
          </Link>

          <div className='flex space-x-6'>
            <SearchFilters />
          </div>

          <div className='flex items-center sapce-x-6'>
            
            <AddPropertyButton/>
            <UserNav
            // اضافته في الناف
              userId={userId}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;