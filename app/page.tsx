'use client';

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import CustomArrow from '@/components/CustomArrow';

// Use strict imports to replace ArrowRight
import {
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/images/hero-bg.png",
    "/images/project-industrial.png",
    "/images/projects-hero.png",
    "/images/services-bg.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
      // specific animations for better control

      // About Section
      gsap.from('.about-section .scroll-animate', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        immediateRender: false
      });

      // What We Do
      gsap.from('.what-we-do-section .scroll-animate', {
        scrollTrigger: {
          trigger: '.what-we-do-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        immediateRender: false
      });

      // Services
      gsap.from('.services-section .scroll-animate', {
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        immediateRender: false
      });

      // Our Work
      gsap.from('.our-work-section .scroll-animate', {
        scrollTrigger: {
          trigger: '.our-work-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        immediateRender: false
      });

      // Stats
      gsap.from('.stats-section .scroll-animate', {
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        immediateRender: false
      });

      // CTA
      gsap.from('.cta-section .scroll-animate', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        immediateRender: false
      });


      // Special animation for the skewed "Performance" box
      gsap.from('.skew-box', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'expo.out',
        immediateRender: false
      });

    }, root);

    // Force a refresh after a short delay to account for layout shifts (e.g. images loading)
    // This is often needed in Next.js when images lack explicit dimensions or load late
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <main ref={root} className="min-h-screen bg-[#F0F0F0] font-sans text-[#111111] overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center bg-[#003900] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={src}
                alt={`Industrial Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Reduced overlay opacity from 60% to 40% and removed grayscale for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003900]/80 via-[#003900]/40 to-transparent" />
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
                <CustomArrow className="w-6 h-6" />
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
            <div className="md:w-1/3 scroll-animate mb-10 md:mb-0">
              <span className="inline-block py-1 px-3 mb-6 bg-[#003900] text-white text-[12px] font-black uppercase tracking-tighter rounded-none">
                Core Capabilities
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#003900] uppercase italic tracking-tighter leading-[0.9]">
                What We <br /> <span className="text-[#FFCD11]">Deliver.</span>
              </h2>
            </div>
            {/* ACCORDION LAYOUT */}
            <div className="md:w-2/3 h-[700px] flex flex-col md:flex-row gap-2">
              {[
                { icon: Globe, title: "Infrastructure", desc: "Large-scale transport networks.", img: "/images/projects-hero.png" },
                { icon: HardHat, title: "Geotechnical", desc: "Scientific earth-studying.", img: "/images/services-bg.png" },
                { icon: Construction, title: "Construction", desc: "Heavy operational management.", img: "/images/project-industrial.png" },
                { icon: Truck, title: "Logistics", desc: "Complex machinery transport.", img: "/images/project-commercial.png" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="scroll-animate group relative flex-1 hover:flex-[3] transition-[flex] duration-700 ease-out bg-[#003900] overflow-hidden border-r border-[#FFCD11]/30 cursor-pointer"
                >
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003900] via-[#003900]/80 to-transparent opacity-90 group-hover:opacity-0 transition-opacity duration-500" />
                  </div>

                  <div className="absolute bottom-0 left-0 p-8 z-10 w-full whitespace-nowrap overflow-hidden transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-10">
                    <item.icon className="w-8 h-8 text-[#FFCD11] mb-4" />
                    <h3 className="text-2xl font-black text-white uppercase italic transform -rotate-0 md:group-hover:rotate-0 transition-transform origin-bottom-left">
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover Content (Optional: Only show if needed, or keep clean image) */}
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                    <h3 className="text-4xl font-black text-[#FFCD11] uppercase italic tracking-tighter shadow-black drop-shadow-md">{item.title}</h3>
                  </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Drilling fleet", icon: Pickaxe, desc: "High-torque rigs for severe terrain and deep boreholes.", img: "/images/services-bg.png" },
              { title: "Civil Works", icon: Construction, desc: "Site clearing, excavation, and structural grading.", img: "/images/projects-hero.png" },
              { title: "Power Supply", icon: Box, desc: "Industrial generators and temporary power infrastructure.", img: "/images/project-industrial.png" },
              { title: "Fleet Hire", icon: Truck, desc: "Full inventory of CAT-certified heavy machinery.", img: "/images/project-commercial.png" }
            ].map((service, index) => (
              <div key={index} className="scroll-animate group relative h-[600px] w-full bg-[#111] overflow-hidden border-4 border-[#333] hover:border-[#FFCD11] transition-transform duration-500 hover:scale-[1.02] hover:z-20 shadow-2xl flex flex-col justify-between">

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#003900]/80 via-[#003900]/40 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                </div>

                {/* Tech Corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-white/20 group-hover:border-[#FFCD11] transition-colors z-20" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-white/20 group-hover:border-[#FFCD11] transition-colors z-20" />

                {/* Content that Hides on Hover */}
                <div className="relative z-10 p-10 flex-grow flex flex-col justify-center items-center text-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10">
                  <div className="w-24 h-24 bg-[#FFCD11] rounded-full flex items-center justify-center mb-8 shadow-xl">
                    <service.icon className="w-12 h-12 text-[#003900]" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
                    {service.title}
                  </h3>
                  <p className="text-white/80 font-bold uppercase text-xs tracking-widest max-w-[80%] mx-auto leading-relaxed border-b-2 border-[#FFCD11] pb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Button that STAYS and Modifies */}
                <div className="relative z-20 p-8 w-full flex justify-center bg-gradient-to-t from-black/80 to-transparent">
                  <button className="px-10 py-4 bg-[#003900] text-white border-2 border-[#FFCD11] group-hover:bg-[#FFCD11] group-hover:text-[#003900] font-black text-xs tracking-widest uppercase flex items-center gap-3 transition-all duration-300 shadow-2xl scale-100 group-hover:scale-110">
                    VIEW SPECS
                    <CustomArrow className="w-4 h-4" />
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
              View All Projects <CustomArrow className="w-4 h-4" />
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
    </main>
  );
}
