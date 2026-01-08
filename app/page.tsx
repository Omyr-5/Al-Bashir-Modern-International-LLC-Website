'use client';

import { useLayoutEffect, useRef } from 'react';
import {
  ArrowRight,
  Construction,
  Settings,
  ShieldCheck,
  Users,
  Pickaxe,
  TrendingUp,
  HardHat,
  Truck,
  Box,
  ChevronRight,
  Globe,
  Building2,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Content Animation
      gsap.from('.hero-content > *', {
        x: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
      });

      // Section Scroll Animations
      const sections = ['.about-section', '.what-we-do-section', '.services-section', '.our-work-section', '.stats-section', '.cta-section'];
      sections.forEach((selector) => {
        gsap.from(`${selector} .scroll-animate`, {
          scrollTrigger: {
            trigger: selector,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Special animation for the skewed "Performance" box
      gsap.from('.skew-box', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 70%'
        },
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'expo.out'
      });

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="min-h-screen bg-[#F0F0F0] font-sans text-[#111111] overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center bg-[#003900] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Industrial Machinery"
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003900] via-[#003900]/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-4 bg-[#FFCD11] z-20" />

        <div className="container mx-auto px-6 relative z-10 hero-content">
          <div className="max-w-4xl border-l-[12px] border-[#FFCD11] pl-8 md:pl-12">
            <span className="inline-block py-1 px-3 mb-6 bg-[#FF4000] text-white text-[12px] font-black uppercase tracking-tighter rounded-none">
              Safety First • Quality Always
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter text-white uppercase italic">
              Heavy <br />
              <span className="text-[#FFCD11]">Duty.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl font-bold leading-tight uppercase">
              Premier industrial solutions for infrastructure, mining, and civil engineering. We build the foundations of progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-12 py-5 bg-[#FFCD11] hover:bg-[#E6B800] text-[#003900] font-black transition-all flex items-center justify-center gap-4 rounded-none shadow-2xl">
                VIEW MACHINERY
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="px-12 py-5 bg-transparent border-4 border-white text-white hover:bg-white hover:text-[#003900] font-black transition-all rounded-none">
                OUR SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="about-section py-32 bg-[#FFFFFF] px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="flex items-center gap-4 scroll-animate">
                <div className="w-16 h-2 bg-[#FFCD11]" />
                <span className="text-sm font-black uppercase tracking-widest text-[#003900]">Our Identity</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#003900] leading-[0.9] uppercase italic tracking-tighter scroll-animate">
                Decades of <br />
                <span className="skew-box text-[#FFCD11] bg-[#003900] px-4 inline-block transform -skew-x-6">Performance</span>
              </h2>
              <p className="text-xl text-[#111111] font-medium leading-relaxed max-w-xl scroll-animate">
                Al-Bashir Modern International is a leader in geotechnical and industrial services. Since 1998, we have provided the heavy-duty machinery and engineering precision required for the world's most demanding projects.
              </p>

              <div className="grid md:grid-cols-2 gap-6 scroll-animate">
                <div className="p-8 bg-[#C4EFCD] border-l-4 border-[#003900]">
                  <Pickaxe className="w-8 h-8 text-[#003900] mb-4" />
                  <h4 className="font-black text-xl text-[#003900] uppercase mb-2">Hard Rock Drilling</h4>
                  <p className="text-sm text-[#003900]/70 font-bold uppercase tracking-tight">Advanced geotechnical exploration</p>
                </div>
                <div className="p-8 bg-[#C4EFCD] border-l-4 border-[#003900]">
                  <TrendingUp className="w-8 h-8 text-[#003900] mb-4" />
                  <h4 className="font-black text-xl text-[#003900] uppercase mb-2">Project Scale</h4>
                  <p className="text-sm text-[#003900]/70 font-bold uppercase tracking-tight">Handling Tier 1 Infrastructure</p>
                </div>
              </div>
            </div>

            <div className="relative scroll-animate">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FFCD11] -z-10" />
              <div className="relative aspect-square bg-[#F0F0F0] p-4 border-t-8 border-[#FFCD11] shadow-2xl">
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="/images/about-team.png"
                    alt="Industrial Site"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. WHAT WE DO SECTION */}
      <section className="what-we-do-section py-32 bg-[#F0F0F0] px-6 border-b-8 border-slate-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 scroll-animate">
              <span className="inline-block py-1 px-3 mb-6 bg-[#003900] text-white text-[12px] font-black uppercase tracking-tighter rounded-none">
                Core Capabilities
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#003900] uppercase italic tracking-tighter leading-[0.9]">
                What We <br /> <span className="text-[#FFCD11]">Deliver.</span>
              </h2>
            </div>
            <div className="md:w-2/3 grid md:grid-cols-2 gap-10">
              {[
                { icon: Globe, title: "Infrastructure", desc: "Large-scale transport and utility networks that connect cities." },
                { icon: HardHat, title: "Geotechnical", desc: "Scientific earth-studying and preparation for safe foundations." },
                { icon: Construction, title: "Construction", desc: "End-to-end heavy construction operational management." },
                { icon: Truck, title: "Logistics", desc: "Complex machinery transport and on-site fleet coordination." },
              ].map((item, idx) => (
                <div key={idx} className="scroll-animate group p-8 bg-white border-l-4 border-transparent hover:border-[#FFCD11] hover:shadow-xl transition-all duration-300">
                  <item.icon className="w-10 h-10 text-[#003900] mb-6 group-hover:text-[#FFCD11] transition-colors" />
                  <h3 className="text-2xl font-black text-[#003900] uppercase mb-3">{item.title}</h3>
                  <p className="text-sm font-bold text-[#111111]/60 uppercase tracking-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="services-section py-32 bg-[#F0F0F0] px-6">
        <div className="container mx-auto">
          <div className="flex flex-col mb-24 space-y-6 scroll-animate">
            <h2 className="text-5xl md:text-8xl font-black text-[#003900] uppercase tracking-tighter leading-none italic">
              Services & <br /> <span className="text-[#FFCD11]">Heavy Fleet</span>
            </h2>
            <div className="w-32 h-4 bg-[#FFCD11]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Drilling fleet", icon: Pickaxe, desc: "High-torque rigs for severe terrain and deep boreholes." },
              { title: "Civil Works", icon: Construction, desc: "Site clearing, excavation, and structural grading." },
              { title: "Power Supply", icon: Box, desc: "Industrial generators and temporary power infrastructure." },
              { title: "Fleet Hire", icon: Truck, desc: "Full inventory of CAT-certified heavy machinery." }
            ].map((service, index) => (
              <div key={index} className="scroll-animate group relative bg-white border border-slate-200 p-12 hover:bg-[#003900] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFCD11] transform translate-x-1/2 -translate-y-1/2 rotate-45 group-hover:bg-[#FF4000] transition-colors" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#FFCD11] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-[#003900]" />
                  </div>
                  <h3 className="text-3xl font-black text-[#003900] group-hover:text-white mb-6 uppercase leading-[0.8]">
                    {service.title}
                  </h3>
                  <p className="text-[#111111]/60 font-bold group-hover:text-white/70 uppercase text-xs tracking-tight mb-8">
                    {service.desc}
                  </p>
                  <button className="text-[#003900] group-hover:text-[#FFCD11] font-black text-[11px] tracking-widest uppercase flex items-center gap-2">
                    SPECIFICATIONS
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5. OUR WORK SECTION */}
      <section className="our-work-section py-32 bg-[#F0F0F0] px-6">
        <div className="container mx-auto">
          <div className="flex flex-col mb-20 scroll-animate">
            <h2 className="text-5xl md:text-8xl font-black text-[#003900] uppercase tracking-tighter leading-none italic">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003900] to-[#FFCD11] stroke-2">Work</span>
            </h2>
            <div className="w-full h-2 bg-slate-200 mt-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Riyadh Metro", cat: "Infrastructure", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop" },
              { title: "Coastal Refinery", cat: "Industrial", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" },
              { title: "Desert Highway", cat: "Civil", img: "https://images.unsplash.com/photo-1581094794329-cd13693db462?q=80&w=2070&auto=format&fit=crop" },
            ].map((work, idx) => (
              <div key={idx} className="scroll-animate group relative h-[500px] bg-white border-4 border-white hover:border-[#003900] transition-all duration-500 overflow-hidden shadow-lg">
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={work.img} alt={work.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#003900]/90 via-transparent to-transparent opacity-100" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="mb-4 inline-block px-3 py-1 bg-[#FFCD11] text-[#003900] text-[10px] font-black uppercase tracking-widest">
                    {work.cat}
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase italic leading-none mb-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {work.title}
                  </h3>
                  <div className="h-1 w-0 bg-[#FFCD11] group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center scroll-animate">
            <button className="px-12 py-5 border-4 border-[#003900] text-[#003900] hover:bg-[#003900] hover:text-[#FFCD11] font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3 mx-auto">
              View All Projects <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="stats-section bg-[#003900] py-20 px-6 border-y-8 border-[#FFCD11]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {[
              { label: "Active Project Sites", value: "48", icon: HardHat },
              { label: "Units in Fleet", value: "1.2k", icon: Truck },
              { label: "LTI Safety Record", value: "100%", icon: ShieldCheck },
              { label: "Regional Centers", value: "12", icon: Settings }
            ].map((stat, i) => (
              <div key={i} className="scroll-animate flex flex-col space-y-2">
                <div className="text-[#FFCD11] text-6xl font-black italic tracking-tighter">{stat.value}</div>
                <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="cta-section py-32 px-6">
        <div className="container mx-auto">
          <div className="relative bg-[#003900] p-12 md:p-24 overflow-hidden border-[15px] border-[#FFCD11] scroll-animate">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-[#FFCD11] opacity-10 skew-x-[-20deg] translate-x-20" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="text-white max-w-2xl">
                <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic">
                  Build Without <br /> <span className="text-[#FFCD11]">Limits.</span>
                </h2>
                <p className="text-xl text-white/70 font-bold uppercase tracking-tight">
                  Consult with our machinery specialists today and secure the firepower your project demands.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                <button className="px-16 py-6 bg-[#FFCD11] hover:bg-[#E6B800] text-[#003900] font-black uppercase tracking-widest text-sm rounded-none shadow-2xl transition-transform hover:-translate-y-1">
                  GET QUOTE NOW
                </button>
                <button className="px-16 py-6 border-4 border-white text-white hover:bg-white hover:text-[#003900] font-black uppercase tracking-widest text-sm rounded-none transition-all">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#003900] py-20 px-6 border-t-[20px] border-[#003700]">
        <div className="container mx-auto text-center">
          <div className="text-[#FFCD11] font-black text-4xl uppercase tracking-tighter mb-8 italic">
            Al Bashir <span className="text-white">Modern.</span>
          </div>
          <div className="mt-10 text-white/20 text-[10px] uppercase font-bold tracking-[0.4em]">
            © 1998–2024 Al-Bashir Modern International LLC. Built Heavy.
          </div>
        </div>
      </footer>
    </main>
  );
}
