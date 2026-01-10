'use client';

import { useLayoutEffect, useRef, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import gsap from 'gsap';
import { getMachineryById } from '@/lib/machinery-data';
import CustomArrow from '@/components/CustomArrow';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function MachineryDetail({ params }: PageProps) {
    const { id } = use(params);
    const machinery = getMachineryById(id);
    const containerRef = useRef<HTMLDivElement>(null);

    if (!machinery) {
        notFound();
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.fade-in-up', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            });

            gsap.from('.side-content', {
                x: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.4
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-surface-light pt-32 pb-20">
            <div className="container mx-auto px-6">

                {/* Back Link */}
                <div className="mb-8 fade-in-up">
                    <Link href="/machinery" className="inline-flex items-center text-gray-500 hover:text-brand-dark transition-colors text-sm font-bold uppercase tracking-wider group">
                        <span className="transform rotate-180 mr-2 group-hover:-translate-x-1 transition-transform">
                            <CustomArrow className="w-4 h-4" />
                        </span>
                        Back to Fleet
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content (Images & Desc) */}
                    <div className="lg:col-span-8">
                        <div className="fade-in-up mb-8 relative h-[400px] md:h-[500px] bg-gray-200 w-full overflow-hidden border border-gray-100">
                            {/* Placeholder for Main Image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                                <span className="text-6xl text-gray-300 font-black uppercase tracking-tighter opacity-30">{machinery.category}</span>
                            </div>
                            <div className="absolute top-6 left-6">
                                <span className="bg-accent-yellow text-brand-dark px-4 py-2 font-black uppercase tracking-wider text-sm">
                                    {machinery.category}
                                </span>
                            </div>
                        </div>

                        <h1 className="fade-in-up text-3xl md:text-5xl font-black text-brand-dark uppercase italic tracking-tighter mb-6">
                            {machinery.name}
                        </h1>

                        <div className="fade-in-up prose max-w-none text-gray-600 mb-12 text-lg leading-relaxed">
                            <p>{machinery.description}</p>
                        </div>

                        <div className="fade-in-up">
                            <h3 className="text-2xl font-black text-brand-dark uppercase mb-6 tracking-tight flex items-center gap-3">
                                <span className="w-2 h-8 bg-error block"></span>
                                Key Features
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {machinery.features.map((feature, i) => (
                                    <div key={i} className="flex items-start p-4 bg-white border border-gray-100">
                                        <span className="text-primary-sand mr-3 text-xl">►</span>
                                        <span className="text-brand-dark font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Specs & CTA) */}
                    <div className="lg:col-span-4 side-content">
                        <div className="bg-brand-dark text-white p-8 sticky top-32">
                            <h3 className="text-2xl font-black uppercase italic mb-8 border-b border-white/20 pb-4">
                                Technical Specs
                            </h3>

                            <div className="space-y-6 mb-10">
                                {Object.entries(machinery.specifications).map(([key, value], i) => (
                                    <div key={i} className="flex flex-col border-b border-white/10 pb-4 last:border-0">
                                        <span className="text-white/50 text-xs uppercase tracking-widest mb-1">{key}</span>
                                        <span className="text-xl font-bold font-mono text-primary-sand">{value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/5 p-6 border border-white/10 mb-8">
                                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                    Interested in this machine? Contact our team for availability and rental rates.
                                </p>
                                <Link href="/contact" className="block w-full text-center py-4 bg-primary-sand hover:bg-white hover:text-brand-dark text-brand-dark font-black uppercase tracking-wider transition-colors">
                                    Enquire Now
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
