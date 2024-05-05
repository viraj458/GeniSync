'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@clerk/nextjs';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const LandingNavBar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative w-12 h-12">
          <Image src="/logo-static.svg" alt="logo" fill />
        </div>
        <h1 className={cn('text-lg font-bold text-white', font.className)}>
          GeniSync
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
            <Button variant='outline' className='rounded-full font-semiboldbold' >
            Get Started
            </Button>
        </Link>
      </div>
    </nav>
  );
};
export default LandingNavBar;
