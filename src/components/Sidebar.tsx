'use client';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white md:fixed md:w-72">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-2 mb-14">
          <div className="relative w-12 h-12">
            <Image fill src="/logo-static.svg" alt="logo" />
          </div>
          <h1 className={cn('text-lg font-bold', montserrat.className)}>
            GeniSync
          </h1>
        </Link>
        <div className="space-y-1">
          {ROUTES.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400',
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
