'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, HardHat, Construction, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
    const root = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
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
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="what-we-do-section py-32 bg-[#F0F0F0] px-6 border-b-8 border-slate-200">
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
    );
}
