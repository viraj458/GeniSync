'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TESTAMONIALS } from '@/lib/constants';

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testamonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TESTAMONIALS.map((testamonial) => (
          <Card
            key={testamonial.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{testamonial.name}</p>
                  <p className="text-xs text-zinc-400">{testamonial.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text-sm">
                {testamonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default LandingContent;
