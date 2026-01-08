'use client';

import CustomArrow from '@/components/CustomArrow';
import HomeServices from '@/components/sections/HomeServices';
import { useLayoutEffect, useRef, useEffect } from 'react';

// Use strict imports to replace ArrowRight
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Construction,
  Globe,
  HardHat,
  Pickaxe,
  Settings,
  ShieldCheck,
  TrendingUp,
  Truck
} from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays and loops
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.loop = true;
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });

      const onEnded = () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(e => console.log("Loop replay failed", e));
        }
      };

      videoRef.current.addEventListener('ended', onEnded);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', onEnded);
        }
      };
    }
  }, []);
  /* Slider Logic Removed */

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
    <main ref={root} className="min-h-screen font-sans text-secondary-charcoal overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative h-[125vh] flex items-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ pointerEvents: 'none' }}
          >
            <source src="/videos/hero-video-2.mp4" type="video/mp4" />
          </video>
          {/* Reduced overlay opacity from 60% to 40% and removed grayscale for better visibility */}
          {/* <div className="absolute inset-0 bg-[#ebb716a1]/50 transition-colors duration-500" /> */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Faded Gradient Shape at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-10" />

        <div className="container mx-auto px-6 relative z-10 hero-content text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block py-1 px-3 mb-6 bg-error text-white text-[12px] font-black uppercase tracking-tighter rounded-none">
              Safety First • Quality Always
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-white uppercase italic">
              Al Bashir <br />
              Modern <span className="text-accent-yellow">International LLC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-bold leading-tight uppercase">
              Premier industrial solutions for infrastructure, mining, and civil engineering. We build the foundations of progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-5 bg-primary-sand hover:bg-accent-yellow text-brand-dark font-black transition-all flex items-center justify-center gap-4 rounded-none shadow-2xl">
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
                <div className="w-16 h-2 bg-accent-yellow" />
                <span className="text-sm font-black uppercase tracking-widest text-brand-dark">Our Identity</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] uppercase italic tracking-tighter scroll-animate">
                Decades of <br />
                <span className="skew-box text-accent-yellow bg-brand-dark px-4 inline-block transform -skew-x-6">Performance</span>
              </h2>
              <p className="text-xl text-[#111111] font-medium leading-relaxed max-w-xl scroll-animate">
                Al-Bashir Modern International is a leader in geotechnical and industrial services. Since 1998, we have provided the heavy-duty machinery and engineering precision required for the world's most demanding projects.
              </p>

              <div className="grid md:grid-cols-2 gap-6 scroll-animate">
                <div className="p-8 bg-primary-sand border-l-4 border-brand-dark">
                  <Pickaxe className="w-8 h-8 text-brand-dark mb-4" />
                  <h4 className="font-black text-xl text-brand-dark uppercase mb-2">Hard Rock Drilling</h4>
                  <p className="text-sm text-brand-dark/70 font-bold uppercase tracking-tight">Advanced geotechnical exploration</p>
                </div>
                <div className="p-8 bg-primary-sand border-l-4 border-brand-dark">
                  <TrendingUp className="w-8 h-8 text-brand-dark mb-4" />
                  <h4 className="font-black text-xl text-brand-dark uppercase mb-2">Project Scale</h4>
                  <p className="text-sm text-brand-dark/70 font-bold uppercase tracking-tight">Handling Tier 1 Infrastructure</p>
                </div>
              </div>
            </div>

            <div className="relative scroll-animate">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-yellow -z-10" />
              <div className="relative aspect-square bg-surface-light p-4 border-t-8 border-accent-yellow shadow-2xl">
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
              <span className="inline-block py-1 px-3 mb-6 bg-brand-dark text-white text-[12px] font-black uppercase tracking-tighter rounded-none">
                Core Capabilities
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-brand-dark uppercase italic tracking-tighter leading-[0.9]">
                What We <br /> <span className="text-accent-yellow">Deliver.</span>
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
                  className="scroll-animate group relative flex-1 hover:flex-[3] transition-[flex] duration-700 ease-out bg-brand-dark overflow-hidden border-r border-accent-yellow/30 cursor-pointer"
                >
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-sand/50 opacity-90 group-hover:opacity-0 transition-opacity duration-500" />
                  </div>

                  <div className="absolute bottom-0 left-0 p-8 z-10 w-full whitespace-nowrap overflow-hidden transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-10">
                    <item.icon className="w-8 h-8 text-accent-yellow mb-4" />
                    <h3 className="text-2xl font-black text-white uppercase italic transform -rotate-0 md:group-hover:rotate-0 transition-transform origin-bottom-left">
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover Content (Optional: Only show if needed, or keep clean image) */}
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                    <h3 className="text-4xl font-black text-accent-yellow uppercase italic tracking-tighter shadow-black drop-shadow-md">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <HomeServices />

      {/* 3.5. OUR WORK SECTION */}
      <section className="our-work-section py-32 bg-surface-light px-6">
        <div className="container mx-auto">
          <div className="flex flex-col mb-20 scroll-animate">
            <h2 className="text-5xl md:text-8xl font-black text-brand-dark uppercase tracking-tighter leading-none italic">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-accent-yellow stroke-2">Work</span>
            </h2>
            <div className="w-full h-2 bg-slate-200 mt-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Riyadh Metro", cat: "Infrastructure", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" },
              { title: "Coastal Refinery", cat: "Industrial", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" },
              { title: "Desert Highway", cat: "Civil", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" },
            ].map((work, idx) => (
              <div key={idx} className="scroll-animate group relative h-[500px] bg-white border-4 border-white hover:border-brand-dark transition-all duration-500 overflow-hidden shadow-lg">
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={work.img} alt={work.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-primary-sand to-transparent group-hover:opacity-0 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="mb-4 inline-block px-3 py-1 bg-accent-yellow text-brand-dark text-[10px] font-black uppercase tracking-widest">
                    {work.cat}
                  </div>
                  <h3 className="text-3xl font-black text-secondary-charcoal uppercase italic leading-none mb-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {work.title}
                  </h3>
                  <div className="h-1 w-0 bg-accent-yellow group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center scroll-animate">
            <button className="px-12 py-5 border-4 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-accent-yellow font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3 mx-auto">
              View All Projects <CustomArrow className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="stats-section bg-brand-dark py-20 px-6 border-y-8 border-accent-yellow">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {[
              { label: "Active Project Sites", value: "48", icon: HardHat },
              { label: "Units in Fleet", value: "1.2k", icon: Truck },
              { label: "LTI Safety Record", value: "100%", icon: ShieldCheck },
              { label: "Regional Centers", value: "12", icon: Settings }
            ].map((stat, i) => (
              <div key={i} className="scroll-animate flex flex-col space-y-2">
                <div className="text-accent-yellow text-6xl font-black italic tracking-tighter">{stat.value}</div>
                <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="cta-section py-32 px-6">
        <div className="container mx-auto">
          <div className="relative bg-brand-dark p-12 md:p-24 overflow-hidden border-[15px] border-accent-yellow scroll-animate">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-accent-yellow opacity-10 skew-x-[-20deg] translate-x-20" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="text-white max-w-2xl">
                <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic">
                  Build Without <br /> <span className="text-accent-yellow">Limits.</span>
                </h2>
                <p className="text-xl text-white/70 font-bold uppercase tracking-tight">
                  Consult with our machinery specialists today and secure the firepower your project demands.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                <button className="px-16 py-6 bg-primary-sand hover:bg-accent-yellow text-brand-dark font-black uppercase tracking-widest text-sm rounded-none shadow-2xl transition-transform hover:-translate-y-1">
                  GET QUOTE NOW
                </button>
                <button className="px-16 py-6 border-4 border-white text-white hover:bg-white hover:text-brand-dark font-black uppercase tracking-widest text-sm rounded-none transition-all">
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
