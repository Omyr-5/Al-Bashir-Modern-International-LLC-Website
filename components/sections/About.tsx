'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Pickaxe, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const root = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // About Section Scroll Animation
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

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="about-section py-32 bg-[#FFFFFF] px-6">
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
    );
}
