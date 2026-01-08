'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Pickaxe,
    Hammer,
    Zap,
    Building2,
    Truck,
    Wrench,
    ArrowRightLeft,
    CheckCircle2,
    HardHat,
    Settings,
    Construction
} from 'lucide-react';
import CustomArrow from './CustomArrow';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesContent() {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Intro - ensure immediate visibility start
            gsap.fromTo('.srv-hero > div',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power4.out' }
            );

            // Grid cards - ensure all cards become visible
            gsap.fromTo('.srv-card',
                {
                    y: 60,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: '.srv-grid',
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );

            // Process steps
            gsap.from('.process-box', {
                scrollTrigger: {
                    trigger: '.process-section',
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
                x: -30,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out',
                immediateRender: false
            });
        }, root);

        return () => ctx.revert();
    }, []);

    const services = [
        { title: "Drilling fleet", icon: Pickaxe, desc: "High-torque, CAT-grade drilling rigs for deep borehole exploration." },
        { title: "Civil Power", icon: Construction, desc: "Heavy-duty site earthworks, excavation, and foundational structural grading." },
        { title: "Grid Systems", icon: Zap, desc: "Industrial-grade electrical infrastructure and HV distribution networks." },
        { title: "Foundations", icon: Building2, desc: "Concrete structural works for high-scale industrial and commercial hubs." },
        { title: "Heavy Rental", icon: Truck, desc: "Direct access to our premium fleet of industrial machinery and support units." },
        { title: "Lifecycle Support", icon: Wrench, desc: "Rigorous preventive maintenance ensuring zero downtime for machinery." }
    ];

    const process = [
        { step: "01", title: "Analysis", desc: "Technical site evaluation using advanced terrain algorithms." },
        { step: "02", title: "Mobility", desc: "Strategic deployment of the heavy fleet to the site area." },
        { step: "03", title: "Operation", desc: "Precision execution under strict safety and performance protocols." },
        { step: "04", title: "Handover", desc: "Final quality checks and technical sign-off of the project." }
    ];

    return (
        <div ref={root} className="min-h-screen text-secondary-charcoal pt-20">
            {/* 1. HERO SECTION */}
            <section className="srv-hero relative py-32 bg-brand-dark text-white overflow-hidden border-b-[12px] border-accent-yellow">
                <div className="absolute inset-0 opacity-10">
                    <Image src="/images/services-bg.png" alt="Srv" fill className="object-cover grayscale" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="border-l-[12px] border-accent-yellow pl-10 capitalize">
                        <span className="inline-block py-1 px-4 bg-error text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">Capabilities</span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.8] tracking-tighter uppercase italic">
                            Built for <br /> <span className="text-accent-yellow">Execution</span>
                        </h1>
                        <p className="max-w-2xl text-xl font-bold text-white/70 uppercase">
                            Delivering the heavy-duty power and technical precision your industrial project demands.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. SERVICES GRID */}
            <section className="srv-grid py-8 px-6 relative z-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-brand-dark border-2 border-brand-dark">
                        {services.map((s, i) => (
                            <div key={i} className="srv-card p-12 bg-white hover:bg-brand-dark group transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-12 h-12 bg-accent-yellow transform translate-x-6 -translate-y-6 rotate-45 group-hover:bg-error transition-colors" />
                                <div className="w-16 h-16 bg-accent-yellow flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                    <s.icon className="w-8 h-8 text-brand-dark" />
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-6 text-brand-dark group-hover:text-white leading-none">{s.title}</h3>
                                <p className="text-sm font-bold text-slate-500 group-hover:text-white/70 uppercase tracking-tight mb-8 leading-relaxed">
                                    {s.desc}
                                </p>
                                <button className="text-brand-dark group-hover:text-accent-yellow font-black text-[10px] tracking-widest uppercase flex items-center gap-2">
                                    View Specs <CustomArrow className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PROCESS SECTION */}
            <section className="process-section py-32 bg-primary-sand/20 border-y-4 border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col mb-24 items-center text-center">
                        <h2 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter mb-4 italic">Operational <span className="text-brand-dark">Core</span></h2>
                        <div className="w-32 h-3 bg-brand-dark" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {process.map((p, i) => (
                            <div key={i} className="process-box p-10 bg-white border-t-8 border-accent-yellow flex flex-col h-full shadow-lg">
                                <div className="text-5xl font-black text-secondary-charcoal/5 mb-8">{p.step}</div>
                                <h3 className="text-xl font-bold uppercase mb-4 text-brand-dark border-b-2 border-slate-100 pb-4">{p.title}</h3>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-tight leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-24 bg-primary-sand text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-10">Power Your Next <span className="text-secondary-charcoal/70">Project</span></h2>
                    <button className="px-16 py-6 bg-accent-yellow hover:bg-accent-yellow text-brand-dark font-black uppercase text-sm tracking-widest shadow-2xl transition-transform hover:-translate-y-1">
                        Inquire Technical Fleet
                    </button>
                </div>
            </section>
        </div>
    );
}
