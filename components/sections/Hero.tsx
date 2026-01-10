'use client';

import { useRef, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import CustomArrow from '@/components/CustomArrow';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const root = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure video plays and loops
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.loop = true;
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error);
            });

            const onEnded = () => {
                if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(e => console.log("Loop replay failed", e));
                }
            };

            videoRef.current.addEventListener('ended', onEnded);

            return () => {
                if (videoRef.current) {
                    videoRef.current.removeEventListener('ended', onEnded);
                }
            };
        }
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Content Animation
            gsap.from('.hero-content > *', {
                x: -100,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
                ease: 'power4.out',
                delay: 0.2
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="relative h-[125vh] flex items-center bg-brand-dark overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    controls={false}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ pointerEvents: 'none' }}
                >
                    <source src="/videos/hero-video-2.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Faded Gradient Shape at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-10" />

            <div className="container mx-auto px-6 relative z-10 hero-content text-center">
                <div className="max-w-5xl mx-auto">
                    <span className="inline-block py-1 px-3 mb-6 bg-error text-white text-[12px] font-black uppercase tracking-tighter rounded-none">
                        Safety First • Quality Always
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-white uppercase italic">
                        Al Bashir <br />
                        Modern <span className="text-accent-yellow">International LLC</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-bold leading-tight uppercase">
                        Premier industrial solutions for infrastructure, mining, and civil engineering. We build the foundations of progress.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/machinery" className="px-12 py-5 bg-primary-sand hover:bg-accent-yellow text-brand-dark font-black transition-all flex items-center justify-center gap-4 rounded-none shadow-2xl">
                            VIEW MACHINERY
                            <CustomArrow className="w-6 h-6" />
                        </Link>
                        <button className="px-12 py-5 bg-transparent border-4 border-white text-white hover:bg-white hover:text-[#003900] font-black transition-all rounded-none">
                            OUR SERVICES
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
