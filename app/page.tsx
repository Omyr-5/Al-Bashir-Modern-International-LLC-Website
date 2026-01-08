'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhatWeDo from '@/components/sections/WhatWeDo';
import HomeServices from '@/components/sections/HomeServices';
import OurWork from '@/components/sections/OurWork';
import Stats from '@/components/sections/Stats';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-secondary-charcoal overflow-hidden">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT SECTION */}
      <About />

      {/* 2.5. WHAT WE DO SECTION */}
      <WhatWeDo />

      {/* 3. SERVICES SECTION */}
      <HomeServices />

      {/* 3.5. OUR WORK SECTION */}
      <OurWork />

      {/* 4. STATS SECTION */}
      <Stats />

      {/* 5. CTA SECTION */}
      <CallToAction />
    </main>
  );
}
