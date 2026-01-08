'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Zap, Shield, Globe, Award, Pickaxe, HardHat } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutContent() {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from('.about-hero-content > *', {
                x: -50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power4.out'
            });

            // Section animations
            const scrollers = ['.story-section', '.values-grid'];
            scrollers.forEach(sel => {
                gsap.from(`${sel} .scroll-animate`, {
                    scrollTrigger: {
                        trigger: sel,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 50,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            });
        }, root);

        return () => ctx.revert();
    }, []);

    const values = [
        { icon: Users, title: "Client Centric", desc: "Heavy focus on delivering value to our global industrial partners." },
        { icon: Shield, title: "Zero Harm", desc: "Uncompromising safety standards. Safety is our main tool." },
        { icon: Zap, title: "Power Tech", desc: "Using the most advanced machinery tech in the market." },
        { icon: Globe, title: "Scale", desc: "Building infrastructure that impacts continents." },
        { icon: Target, title: "Precision", desc: "Millimeter-perfect engineering for extreme environments." },
        { icon: Award, title: "Excellence", desc: "Certified performance in every heavy-duty endeavor." },
    ];

    return (
        <div ref={root} className="overflow-hidden bg-[#F0F0F0]">
            {/* 1. HERO SECTION */}
            <section className="about-hero relative py-32 bg-[#003900] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 border-b-8 border-ind-yellow">
                    <Image
                        src="/images/about-team.png"
                        alt="Hero"
                        fill
                        className="object-cover grayscale"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 about-hero-content">
                    <div className="border-l-8 border-ind-yellow pl-8">
                        <span className="inline-block py-1 px-3 bg-accent-warning text-white text-[10px] font-black uppercase tracking-widest mb-6">
                            Est. 1998
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">
                            The <span className="text-ind-yellow">Power</span> <br /> Behind Progress
                        </h1>
                        <p className="max-w-2xl text-xl text-white/70 font-bold uppercase tracking-tight">
                            Providing the heavy-duty machinery and technical expertise that drives global development.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. OUR STORY SECTION */}
            <section className="story-section py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="scroll-animate relative">
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-ind-yellow -z-10" />
                            <div className="border-t-[12px] border-l-[12px] border-brand-green p-4">
                                <Image
                                    src="/images/about-team.png"
                                    alt="Legacy"
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </div>
                        <div className="scroll-animate space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black text-brand-green leading-[0.9] uppercase tracking-tighter">
                                Building a <br />
                                <span className="text-ind-yellow bg-brand-green px-4 inline-block transform -skew-x-6 italic">Heavy Legacy</span>
                            </h2>
                            <p className="text-xl text-text-dark font-medium leading-relaxed">
                                Our journey is carved in rock and steel. We didn't just grow; we engineered our way to the top. By combining robust machinery with deep technical insight, we've become the default choice for high-stakes industrial projects.
                            </p>
                            <div className="grid grid-cols-3 gap-6 pt-10 border-t-2 border-slate-100">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-brand-green mb-1">25+</div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years Active</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-brand-green mb-1">1.2k+</div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fleet Size</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-brand-green mb-1">120+</div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Sites</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. VALUES SECTION */}
            <section className="values-grid py-32 bg-bg-light">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col mb-20 scroll-animate">
                        <h2 className="text-5xl md:text-7xl font-black text-brand-green uppercase tracking-tighter italic">Machine <span className="text-ind-yellow">Code</span></h2>
                        <div className="w-24 h-4 bg-ind-yellow mt-4" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {values.map((v, i) => (
                            <div key={i} className="scroll-animate p-12 bg-white border-b-8 border-transparent hover:border-ind-yellow hover:bg-brand-green group transition-all duration-500">
                                <div className="w-16 h-16 bg-ind-yellow flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <v.icon className="w-8 h-8 text-brand-green" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-brand-green group-hover:text-white uppercase leading-none">{v.title}</h3>
                                <p className="text-text-dark/60 font-bold group-hover:text-white/70 uppercase text-xs tracking-tight">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
