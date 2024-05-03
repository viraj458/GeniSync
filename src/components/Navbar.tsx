import { UserButton } from '@clerk/nextjs';
import dynamic from 'next/dynamic';

const MobileSidebar = dynamic(() => import('@/components/MobileSidebar'), {
  ssr: false,
});

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
export default Navbar;
