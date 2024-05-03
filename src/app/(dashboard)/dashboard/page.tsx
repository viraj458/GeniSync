'use client';

import { Card } from '@/components/ui/card';
import { TOOLS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const router = useRouter();
  return (
    <section>
      <div className="mb-8 space-y-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold">
          Explore the power of AI
        </h2>
        <p className="text-center text-muted-foreground font-light text-sm md:text-lg">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-56 space-y-4">
        {TOOLS.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className={cn(
              'p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer',
              tool.hoverBgColor,
            )}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </section>
  );
};
export default DashboardPage;
