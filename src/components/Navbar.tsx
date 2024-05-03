import MobileSidebar from '@/components/MobileSidebar';
import { UserButton } from '@clerk/nextjs';

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
