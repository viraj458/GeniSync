'use client';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import TyprwriterComponent from 'typewriter-effect';

const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="pb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TyprwriterComponent
            options={{
              strings: [
                'Conversation',
                'Image Generation',
                'Music Generation',
                'Video Generation',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm font-light md:text-lg lg:text-xl text-zinc-400">
        Create content 10X faster
      </div>
      <div className="">
        <Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
          <Button
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-l from-blue-500 to-pink-500 hover:bg-gradient-to-l hover:from-blue-700 hover:to-pink-700"
          >
            Get Started for free
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default LandingHero;
