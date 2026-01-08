'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomArrow from '@/components/CustomArrow';

gsap.registerPlugin(ScrollTrigger);

export default function OurWork() {
    const root = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
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
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="our-work-section py-32 bg-surface-light px-6">
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
    );
}
