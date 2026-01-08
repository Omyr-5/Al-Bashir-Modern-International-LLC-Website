'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Share2, Tag } from 'lucide-react';
import CustomArrow from './CustomArrow';

gsap.registerPlugin(ScrollTrigger);

export default function NewsContent() {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero - ensure immediate start
            gsap.fromTo('.news-hero > div',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power4.out' }
            );

            gsap.fromTo('.news-card',
                {
                    y: 50,
                    opacity: 0
                },
                {
                    scrollTrigger: {
                        trigger: '.news-grid',
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );
        }, root);

        return () => ctx.revert();
    }, []);

    const articles = [
        {
            id: '1',
            title: 'Expansion into Saudi Arabia Infrastructure',
            date: 'Jan 15, 2024',
            category: 'Operations',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop',
            summary: 'Deploying our heavy-duty fleet to support the massive infrastructure push in Riyadh under Vision 2030.'
        },
        {
            id: '2',
            title: 'Gold Rated for Industrial Safety',
            date: 'Dec 05, 2023',
            category: 'Safety',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
            summary: "Exceeding safety benchmarks on all our geotechnical sites. Safety is our primary tool for performance."
        },
        {
            id: '3',
            title: 'Fleet Upgrade: New 500-Series Rigs',
            date: 'Nov 12, 2023',
            category: 'Machinery',
            image: 'https://images.unsplash.com/photo-1581094794329-cd13693db462?q=80&w=2070&auto=format&fit=crop',
            summary: 'Adding high-torque drilling units to our regional centers to tackle deeper bedrock challenges.'
        }
    ];

    return (
        <div ref={root} className="min-h-screen bg-[#F0F0F0] pt-20">
            {/* 1. HERO SECTION */}
            <section className="news-hero relative py-32 bg-brand-green text-white overflow-hidden border-b-8 border-ind-yellow">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#003900] via-transparent to-[#003900]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-3 py-1 bg-accent-warning text-white text-[10px] font-black uppercase mb-6 tracking-widest">Journal</span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter uppercase italic">
                        Field <span className="text-ind-yellow">Reports</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl font-bold text-white/70 uppercase">Latest updates from our global project sites and technical breakthroughs.</p>
                </div>
            </section>

            {/* 2. NEWS GRID */}
            <section className="news-grid py-12 px-6 relative z-10">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {articles.map((article) => (
                            <article key={article.id} className="news-card group bg-white border-t-8 border-ind-yellow hover:bg-brand-green transition-all duration-500 shadow-xl overflow-hidden">
                                <div className="relative h-64 grayscale group-hover:grayscale-0 transition-all duration-1000">
                                    <img
                                        src={article.image}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 bg-brand-green text-ind-yellow px-4 py-2 font-black text-[10px] uppercase italic">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="p-10 space-y-6">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-brand-green group-hover:text-ind-yellow uppercase tracking-widest">
                                        <Calendar className="w-4 h-4" /> {article.date}
                                    </div>
                                    <h2 className="text-2xl font-black text-brand-green group-hover:text-white uppercase leading-none italic">{article.title}</h2>
                                    <p className="text-sm font-bold text-slate-500 group-hover:text-white/70 uppercase tracking-tight leading-relaxed line-clamp-3">
                                        {article.summary}
                                    </p>
                                    <div className="pt-6 border-t border-slate-100 flex justify-between items-center group-hover:border-white/10">
                                        <button className="flex items-center gap-2 text-brand-green group-hover:text-ind-yellow font-black text-[10px] uppercase tracking-widest">
                                            READ FULL LOG <CustomArrow className="w-4 h-4" />
                                        </button>
                                        <Share2 className="w-4 h-4 text-slate-300 group-hover:text-white/30" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SUBSCRIPTION */}
            <section className="py-20 bg-brand-green border-y-8 border-ind-yellow">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-black text-brand-green uppercase italic tracking-tighter leading-none mb-4">
                                Join the <br /> <span className="text-ind-yellow bg-brand-green px-4 inline-block transform -skew-x-6">Industrial Loop</span>
                            </h2>
                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Monthly summaries from the field.</p>
                        </div>
                        <div className="flex w-full lg:w-auto p-2 bg-bg-light border-2 border-slate-200">
                            <input type="email" placeholder="Email@company.com" className="bg-transparent px-6 py-4 outline-none border-none text-brand-green font-black uppercase text-xs w-full lg:w-72" />
                            <button className="bg-ind-yellow text-brand-green px-10 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-brand-green hover:text-white transition-all">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
