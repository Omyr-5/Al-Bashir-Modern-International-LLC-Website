'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Zap, Shield, Globe, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutContent() {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from('.about-hero > *', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out'
            });

            // Story Section Animation
            gsap.from('.story-image', {
                scrollTrigger: {
                    trigger: '.story-section',
                    start: 'top 80%',
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.story-content > *', {
                scrollTrigger: {
                    trigger: '.story-section',
                    start: 'top 80%',
                },
                x: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out'
            });

            // Values Grid Animation
            gsap.from('.value-card', {
                scrollTrigger: {
                    trigger: '.values-section',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'back.out(1.7)'
            });

        }, root);

        return () => ctx.revert();
    }, []);

    const values = [
        { icon: UserIcon, title: "Client Centric", desc: "We prioritize our clients' needs above all else." }, // Placeholder icons, will fix below
        { icon: Shield, title: "Integrity", desc: "Honesty and transparency in every project." },
        { icon: Zap, title: "Innovation", desc: "Embracing the latest technology for better results." },
        { icon: Globe, title: "Sustainability", desc: "Building a greener future for generations to come." },
        { icon: Target, title: "Precision", desc: "Attention to detail is our hallmark." },
        { icon: Award, title: "Excellence", desc: "Striving for perfection in every endeavor." },
    ];

    function UserIcon(props: any) {
        return <Users {...props} />;
    }


    return (
        <div ref={root} className="overflow-hidden">
            {/* Hero Section */}
            <section className="about-hero relative py-24 bg-neutral-900 text-white text-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
                        Who We Are
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        We Build The <span className="text-blue-500">Extraordinary</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-neutral-400 font-light leading-relaxed">
                        From humble beginnings to distinct global landmarks, our journey is defined by passion, precision, and an unyielding commitment to excellence.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="story-section py-24 bg-white dark:bg-neutral-950">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="story-image relative">
                            <div className="absolute -inset-4 bg-blue-600/10 rounded-[2rem] -z-10 transform rotate-2"></div>
                            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/about-team.png"
                                    alt="Our Team"
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="story-content space-y-8">
                            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
                                Pioneering Solutions for a <br />
                                <span className="text-blue-600">Complex World</span>
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                Founded in 1998, Al-Bashir Modern International began with a singular vision: to bridge the gap between traditional engineering and modern innovation. Over the decades, we have evolved from a local consultancy to a powerhouse of infrastructure development.
                            </p>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                Our multidisciplinary team of engineers, architects, and planners works in unison to tackle the most challenging environments. We believe that true engineering is not just about construction; it's about creating ecosystems that thrive.
                            </p>
                            <div className="flex gap-8 pt-4">
                                <div>
                                    <div className="text-4xl font-black text-neutral-900 dark:text-white mb-1">25+</div>
                                    <div className="text-sm text-neutral-500 uppercase tracking-wider">Years</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-neutral-900 dark:text-white mb-1">850+</div>
                                    <div className="text-sm text-neutral-500 uppercase tracking-wider">Projects</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-neutral-900 dark:text-white mb-1">120+</div>
                                    <div className="text-sm text-neutral-500 uppercase tracking-wider">Experts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section py-24 bg-neutral-50 dark:bg-neutral-900/50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">Our Core Values</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400">
                            These principles guide every decision we make and every project we undertake.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="value-card p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 dark:text-white">{value.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
