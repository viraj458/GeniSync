import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:inset-y-0 bg-gray-900">
        <Sidebar />
      </div>
      <main className="w-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
