'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
    const root = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
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
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="cta-section py-32 px-6">
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
    );
}
