'use client';

import { useLayoutEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import {
  ArrowRight,
  Construction,
  HardHat,
  ShieldCheck,
  Users,
  Building2,
  Briefcase,
  Target,
  Trophy,
  Pickaxe,
  Hammer,
  Zap,
  Truck,
  Wrench,
  ArrowRightLeft
} from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const t = useTranslations('Home');
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Background Animation
      gsap.fromTo('.hero-bg',
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power4.out' }
      );

      // Hero Content Animation
      gsap.from('.hero-content > *', {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.5
      });

      // Scroll Animations for sections
      const sections = ['#who-we-are', '#what-we-do', '#stats', '#cta'];
      sections.forEach(section => {
        gsap.from(`${section} .animate-up`, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        });
      });

      // Parallax for Hero
      gsap.to('.hero-bg', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 200,
        ease: 'none'
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="flex flex-col min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="hero-section relative h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-900/30 via-neutral-900/20 to-neutral-900/80 backdrop-blur-[1px]" />

        {/* Hero Background Image */}
        <div className="hero-bg absolute inset-0 z-0 select-none">
          <Image
            src="/images/hero-bg.png"
            alt="Modern Heavy Machinery"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
        </div>

        <div className="container relative z-20 px-6 mx-auto text-center text-white hero-content">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
            Pioneering The Future
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-none drop-shadow-2xl">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">LEGACIES</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-neutral-100 mb-12 leading-relaxed font-light drop-shadow-md">
            Delivering innovative geotechnical solutions and engineering excellence for global infrastructure. We turn distinct challenges into sustainable realities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all flex items-center gap-2 group shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-95">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full backdrop-blur-md transition-all border border-white/20 hover:border-white/40 hover:scale-105 active:scale-95">
              Our Projects
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section id="who-we-are" className="py-32 bg-white dark:bg-neutral-950 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-up">
              <div className="inline-block px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                Our Identity
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white leading-[1.1]">
                Decades of Engineering <br />
                <span className="text-neutral-400">Precision & Innovation</span>
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                Founded with a vision to redefine geotechnical engineering, Al-Bashir Modern International has grown into a leading force. We combine deep technical expertise with state-of-the-art technology to provide solutions that are both robust and efficient.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-2xl text-blue-600 shadow-sm">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl dark:text-white">Precision</h4>
                    <p className="text-neutral-500 font-light text-sm">Digital terrain analysis</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-2xl text-blue-600 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl dark:text-white">Reliability</h4>
                    <p className="text-neutral-500 font-light text-sm">ISO Certified Safety</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-up delay-200">
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl -z-10" />
              <div className="aspect-[4/3] rounded-[2.5rem] bg-neutral-100 dark:bg-neutral-900 overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-8 left-8 z-20">
                  <div className="text-4xl font-bold text-white mb-2">25+</div>
                  <div className="text-neutral-300 text-sm tracking-uppercase">Years of Experience</div>
                </div>
                {/* Using a placeholder for interior/team shot */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581094794329-cd13693db462?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO SECTION */}
      <section id="what-we-do" className="py-32 bg-neutral-50 dark:bg-neutral-900/30 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 animate-up">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-6">
                Expertise
              </div>
              <h2 className="text-4xl md:text-6xl font-black dark:text-white leading-tight">
                Core Expertise & <br /> Specialized Services
              </h2>
            </div>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-md pb-2">
              Comprehensive geotechnical and engineering services tailored to meet the rigorous demands of modern construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Drilling Service", icon: Pickaxe, desc: "Expert drilling for geotechnical investigation and resources." },
              { title: "Civil Work", icon: Hammer, desc: "Comprehensive civil engineering for residential and commercial." },
              { title: "Electrical Works", icon: Zap, desc: "Full-spectrum electrical installations and maintenance." },
              { title: "Infrastructure", icon: Building2, desc: "Building roads, bridges, and utility networks." },
              { title: "Equipment Rental", icon: Truck, desc: "High-quality heavy machinery and construction equipment." },
              { title: "Maintenance", icon: Wrench, desc: "Reliable support ensuring facility longevity." },
              { title: "Shifting Materials", icon: ArrowRightLeft, desc: "Efficient logistics and earthmoving services." }
            ].map((service, index) => (
              <div key={index} className="animate-up group p-10 bg-white dark:bg-neutral-900 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center rounded-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE / STATS SECTION */}
      <section id="stats" className="py-32 bg-neutral-950 text-white relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-neutral-800 pt-16">
            {[
              { label: "Years of Excellence", value: "25+", icon: Trophy },
              { label: "Completed Projects", value: "850+", icon: Building2 },
              { label: "Global Clients", value: "120+", icon: Users },
              { label: "Awards Won", value: "15+", icon: Target }
            ].map((stat, index) => (
              <div key={index} className="animate-up text-center group md:text-left">
                <div className="inline-flex p-3 bg-neutral-900 rounded-2xl mb-6 group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-colors">
                  <stat.icon className="w-6 h-6 text-neutral-400" />
                </div>
                <div className="text-5xl md:text-7xl font-black mb-2 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">{stat.value}</div>
                <div className="text-neutral-500 font-bold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section id="cta" className="py-32 bg-white dark:bg-neutral-950 overflow-hidden px-6">
        <div className="container mx-auto animate-up">
          <div className="relative group p-12 md:p-24 rounded-[3rem] bg-blue-600 overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 mix-blend-overlay" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 mix-blend-multiply" />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-7xl font-black mb-10 text-white leading-[0.9] tracking-tight">
                READY TO BUILD <br /> THE FOUNDATION?
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl font-light">
                Contact our expert engineering team today for a comprehensive consultation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 hover:bg-neutral-100 font-bold rounded-full transition-all shadow-xl hover:scale-105 active:scale-95">
                  Contact Our Team
                </button>
                <button className="w-full sm:w-auto px-12 py-6 bg-blue-700/50 hover:bg-blue-800 text-white font-bold rounded-full transition-all border border-white/20 backdrop-blur-md">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
