'use client';

import Hero from '@/components/custom/Hero';
import Services from '@/components/custom/Services';
import HowItWorks from '@/components/custom/HowItWorks';
import Pricing from '@/components/custom/Pricing';
import FAQ from '@/components/custom/FAQ';

export default function HomeClient() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </main>
  );
}
