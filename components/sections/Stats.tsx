'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HardHat, Truck, ShieldCheck, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
    const root = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.stats-section .scroll-animate', {
                scrollTrigger: {
                    trigger: '.stats-section',
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
        <section ref={root} className="stats-section bg-brand-dark py-20 px-6 border-y-8 border-accent-yellow">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
                    {[
                        { label: "Active Project Sites", value: "48", icon: HardHat },
                        { label: "Units in Fleet", value: "1.2k", icon: Truck },
                        { label: "LTI Safety Record", value: "100%", icon: ShieldCheck },
                        { label: "Regional Centers", value: "12", icon: Settings }
                    ].map((stat, i) => (
                        <div key={i} className="scroll-animate flex flex-col space-y-2">
                            <div className="text-accent-yellow text-6xl font-black italic tracking-tighter">{stat.value}</div>
                            <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
