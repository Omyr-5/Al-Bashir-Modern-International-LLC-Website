'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { getMachinery } from '@/lib/machinery-data';
import MachineryCard from '@/components/machinery/MachineryCard';

export default function MachineryList() {
    const machinery = getMachinery();
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.machinery-title', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.machinery-card', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.3
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-surface-light pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <span className="inline-block py-1 px-3 mb-4 bg-error text-white text-[10px] font-black uppercase tracking-tighter">
                        Our Fleet
                    </span>
                    <h1 className="machinery-title text-4xl md:text-6xl font-black text-brand-dark uppercase italic tracking-tighter mb-6 relative inline-block">
                        Modern <span className="text-primary-sand-dark">Machinery</span>
                    </h1>
                    <p className="machinery-title max-w-2xl mx-auto text-gray-600 text-lg">
                        Explore our extensive fleet of heavy-duty machinery designed to tackle the most demanding infrastructure and civil engineering projects.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {machinery.map((item, index) => (
                        <div key={item.id} className="machinery-card">
                            <MachineryCard machinery={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
