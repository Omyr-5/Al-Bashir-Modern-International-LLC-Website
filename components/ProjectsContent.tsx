'use client';

import { useRef, useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Filter, ArrowUpRight, MapPin, Calendar, HardHat } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsContent() {
    const root = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState('All');

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero
            gsap.from('.prj-hero > *', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power4.out'
            });

            // Grid cards on load - ensure all visible
            gsap.fromTo('.prj-card',
                {
                    scale: 0.95,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: '.prj-grid',
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    },
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );
        }, root);

        return () => ctx.revert();
    }, []);

    const projects = [
        { id: 1, title: "Riyadh Metro Extension", category: "Infrastructure", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop", loc: "Riyadh, KSA", year: "2024" },
        { id: 2, title: "Offshore Foundation A2", category: "Geotechnical", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", loc: "Gulf Area", year: "2023" },
        { id: 3, title: "Urban Drainage Hub", category: "Civil", image: "https://images.unsplash.com/photo-1581094794329-cd13693db462?q=80&w=2070&auto=format&fit=crop", loc: "Muscat, Oman", year: "2023" },
        { id: 4, title: "Mining Hub Terminal", category: "Infrastructure", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop", loc: "Western Region", year: "2022" },
    ];

    const categories = ['All', 'Infrastructure', 'Geotechnical', 'Civil'];
    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <div ref={root} className="min-h-screen bg-[#F0F0F0] text-text-dark">
            {/* 1. HERO SECTION */}
            <section className="prj-hero relative py-32 bg-brand-green text-white overflow-hidden border-b-8 border-ind-yellow">
                <div className="absolute inset-0 opacity-10">
                    <Image src="/images/projects-hero.png" alt="Prj" fill className="object-cover grayscale" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-3 py-1 bg-accent-warning text-white text-[10px] font-black uppercase mb-6 tracking-widest">Active Sites</span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter uppercase italic">
                        The <span className="text-ind-yellow">Portfolio</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl font-bold text-white/70 uppercase">Showcasing the heavy-duty benchmarks in global infrastructure development.</p>
                </div>
            </section>

            {/* 2. FILTER BAR */}
            <section className="sticky top-20 z-40 bg-white border-b-4 border-slate-100 py-6">
                <div className="container mx-auto px-6 flex justify-between items-center overflow-x-auto no-scrollbar gap-10">
                    <div className="flex gap-2">
                        {categories.map(c => (
                            <button
                                key={c}
                                onClick={() => setFilter(c)}
                                className={`px-8 py-3 font-black uppercase text-[10px] tracking-widest transition-all ${filter === c ? 'bg-ind-yellow text-brand-green shadow-lg' : 'bg-bg-light text-slate-400 hover:text-brand-green hover:bg-light-green'}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. GRID */}
            <section className="prj-grid py-20 lg:py-32 px-6">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        {filtered.map(p => (
                            <div key={p.id} className="prj-card group relative flex flex-col bg-white border-4 border-white hover:border-ind-yellow transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2">
                                {/* Top Corner Accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-ind-yellow transform translate-x-10 -translate-y-10 rotate-45 group-hover:bg-brand-green transition-all duration-500 z-10" />

                                {/* Bottom Corner Accent */}
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-brand-green transform -translate-x-8 translate-y-8 rotate-45 group-hover:bg-ind-yellow transition-all duration-500 z-10" />

                                <div className="relative h-[400px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                                    <img src={p.image} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute top-0 right-0 p-6 z-20">
                                        <div className="bg-ind-yellow text-brand-green font-black px-4 py-2 uppercase text-[10px] italic shadow-2xl group-hover:bg-brand-green group-hover:text-ind-yellow transition-all">
                                            {p.category}
                                        </div>
                                    </div>
                                    {/* Overlay with animation */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 via-brand-green/20 to-transparent group-hover:from-transparent group-hover:via-transparent transition-all duration-700" />

                                    {/* Industrial Border Strip */}
                                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-ind-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>
                                <div className="p-10 space-y-6 relative z-20 bg-white group-hover:bg-light-green transition-colors duration-500">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-3xl font-black text-brand-green uppercase leading-none group-hover:text-ind-yellow transition-colors max-w-[80%]">{p.title}</h3>
                                        <div className="text-brand-green font-black text-xl italic border-2 border-brand-green px-3 py-1 group-hover:border-ind-yellow group-hover:text-ind-yellow transition-all">{p.year}</div>
                                    </div>
                                    <div className="flex items-center gap-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ind-yellow" /> {p.loc}</div>
                                        <div className="flex items-center gap-2"><HardHat className="w-4 h-4 text-ind-yellow" /> Tier 1 Site</div>
                                    </div>
                                    {/* Enhanced CTA Button */}
                                    <button className="flex items-center gap-2 text-brand-green font-black uppercase text-[11px] tracking-widest pt-6 border-t-2 border-slate-100 w-full group-hover:text-ind-yellow group-hover:border-ind-yellow transition-all group/btn">
                                        VIEW TECHNICAL SPECS <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
