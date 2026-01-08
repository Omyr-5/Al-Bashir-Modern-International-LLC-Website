'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, MapPin, Clock, Search, Filter, TrendingUp, Users, Building, HardHat } from 'lucide-react';
import CustomArrow from './CustomArrow';

gsap.registerPlugin(ScrollTrigger);

export default function JobsContent() {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.jobs-hero > *', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power4.out'
            });

            gsap.from('.stat-box', {
                scrollTrigger: {
                    trigger: '.stats-bar',
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                x: -30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out',
                immediateRender: false
            });

            gsap.fromTo('.job-card',
                {
                    y: 40,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: '.jobs-list',
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: 'power2.out'
                }
            );
        }, root);

        return () => ctx.revert();
    }, []);

    const jobs = [
        { id: 1, title: "Lead Site Geotechnical", type: "Full-Time", loc: "Riyadh, KSA", area: "Operations" },
        { id: 2, title: "Machinery Fleet Supervisor", type: "Full-Time", loc: "Dubai, UAE", area: "Machinery" },
        { id: 3, title: "HSE Compliance Officer", type: "Contract", loc: "Muscat, Oman", area: "Safety" },
        { id: 4, title: "Heavy Rig Technician", type: "Full-Time", loc: "Abu Dhabi, UAE", area: "Field Tech" },
    ];

    return (
        <div ref={root} className="min-h-screen bg-[#F0F0F0]">
            {/* 1. HERO SECTION */}
            <section className="jobs-hero relative py-32 bg-brand-green text-white overflow-hidden border-b-8 border-ind-yellow">
                <div className="absolute inset-0 opacity-10">
                    <img src="/images/hero-bg.png" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-3 py-1 bg-accent-warning text-white text-[10px] font-black uppercase mb-6 tracking-widest">Careers</span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter uppercase italic leading-[0.8]">
                        The <span className="text-ind-yellow">Workforce</span> <br /> of Tomorrow
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl font-bold text-white/70 uppercase mb-12">Building world-class infrastructure requires world-class performance. Join the elite.</p>

                    {/* Industrial Search */}
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row p-2 bg-brand-green-alt border-4 border-ind-yellow">
                        <div className="flex-grow flex items-center px-6 gap-4 border-b-2 md:border-b-0 md:border-r-2 border-white/10">
                            <Search className="w-6 h-6 text-ind-yellow" />
                            <input type="text" placeholder="Search Role / Location" className="bg-transparent w-full py-5 text-white outline-none placeholder:text-white/30 font-black uppercase text-xs" />
                        </div>
                        <button className="bg-ind-yellow text-brand-green px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-brand-green transition-all">FIND OPENINGS</button>
                    </div>
                </div>
            </section>

            {/* 2. STATS BAR */}
            <section className="stats-bar -mt-10 relative z-20 pb-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-1 bg-brand-green border-2 border-brand-green">
                        {[
                            { icon: Users, label: "Specialists", val: "1,200+" },
                            { icon: HardHat, label: "Project Sites", val: "48" },
                            { icon: TrendingUp, label: "Growth Index", val: "24%" }
                        ].map((s, i) => (
                            <div key={i} className="stat-box p-12 bg-white flex flex-col items-center group hover:bg-ind-yellow transition-all duration-500">
                                <s.icon className="w-8 h-8 text-ind-yellow mb-6 group-hover:text-brand-green transition-colors" />
                                <div className="text-5xl font-black text-brand-green italic tracking-tighter mb-2">{s.val}</div>
                                <div className="text-[10px] font-black text-brand-green/40 uppercase tracking-[0.3em]">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. JOBS LIST */}
            <section className="jobs-list py-20 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="border-l-8 border-ind-yellow pl-6">
                            <h2 className="text-5xl font-black text-brand-green uppercase italic tracking-tighter">Current Deployment</h2>
                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest mt-2">4 Critical Openings</p>
                        </div>
                        <button className="flex items-center gap-2 bg-white px-8 py-3 font-black text-[10px] uppercase border-2 border-slate-100 text-slate-400 hover:text-brand-green hover:border-ind-yellow transition-all">
                            <Filter className="w-4 h-4" /> REFILTER
                        </button>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((j) => (
                            <div key={j.id} className="job-card group flex flex-col md:flex-row items-center justify-between p-10 bg-white border-2 border-transparent hover:border-ind-yellow hover:bg-light-green transition-all duration-300 shadow-xl">
                                <div className="flex flex-col md:flex-row items-center gap-10">
                                    <div className="w-16 h-16 bg-bg-light flex items-center justify-center group-hover:bg-brand-green group-hover:text-ind-yellow transition-colors">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl font-black text-brand-green uppercase italic leading-none mb-4 group-hover:translate-x-2 transition-transform">{j.title}</h3>
                                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ind-yellow" /> {j.loc}</div>
                                            <div className="flex items-center gap-2"><Building className="w-4 h-4 text-ind-yellow" /> {j.area}</div>
                                            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-ind-yellow" /> {j.type}</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-8 md:mt-0 px-12 py-4 bg-brand-green text-white font-black uppercase text-[10px] tracking-widest hover:bg-ind-yellow hover:text-brand-green transition-all shadow-xl">
                                    ENLIST NOW
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* TALENT CTA */}
                    <div className="mt-20 p-12 md:p-24 bg-brand-green text-white border-b-[20px] border-ind-yellow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 h-full w-1/4 bg-ind-yellow opacity-10 skew-x-[-20deg] translate-x-10" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl text-center md:text-left">
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] italic mb-6">Didn't find your <br /> <span className="text-ind-yellow font-black">Designation?</span></h3>
                                <p className="text-lg font-bold text-white/50 uppercase">Join our technical talent reserve for future deployments.</p>
                            </div>
                            <button className="px-16 py-6 border-4 border-ind-yellow text-ind-yellow font-black uppercase text-sm tracking-widest hover:bg-ind-yellow hover:text-brand-green transition-all shadow-2xl">
                                JOIN RESERVE
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
