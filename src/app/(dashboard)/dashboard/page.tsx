import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
  return (
    <div className='flex justify-end'>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default DashboardPage;
