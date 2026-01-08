'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Pickaxe,
    Hammer,
    Zap,
    Building2,
    Truck,
    Wrench,
    ArrowRightLeft,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesContent() {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo('.services-hero > *',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power3.out'
                }
            );

            // Services Grid Animation
            const cards = gsap.utils.toArray('.service-card');
            if (cards.length > 0) {
                gsap.fromTo(cards,
                    { y: 50, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: '.services-grid',
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        },
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.8,
                        ease: 'power3.out'
                    }
                );
            }

            // Process Animation
            const steps = gsap.utils.toArray('.process-step');
            if (steps.length > 0) {
                gsap.fromTo(steps,
                    { x: -30, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: '.process-section',
                            start: 'top 75%',
                            toggleActions: 'play none none reverse'
                        },
                        x: 0,
                        opacity: 1,
                        stagger: 0.2,
                        duration: 1,
                        ease: 'power3.out'
                    }
                );
            }

        }, root);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            title: "Drilling Service",
            description: "Expert drilling solutions for geotechnical investigation, borehole drilling, and resource exploration.",
            icon: Pickaxe,
            features: ["Boreholes", "Core Sampling", "Water Wells"]
        },
        {
            title: "Civil Work",
            description: "Comprehensive civil engineering and construction services for residential and commercial projects.",
            icon: Hammer,
            features: ["Foundation Works", "Structural Works", "Finishing"]
        },
        {
            title: "Electrical Works",
            description: "Full-spectrum electrical installations, maintenance, and power solutions for improved efficiency.",
            icon: Zap,
            features: ["HV/LV Systems", "Installations", "Testing & Commissioning"]
        },
        {
            title: "Infrastructure Development",
            description: "Building the backbone of communities with roads, bridges, and utility networks.",
            icon: Building2,
            features: ["Roads & Highways", "Utility Networks", "Urban Planning"]
        },
        {
            title: "Equipment Rental",
            description: "Providing high-quality heavy machinery and construction equipment for your project needs.",
            icon: Truck,
            features: ["Cranes & Excavators", "Flexible Terms", "Maintenance Included"]
        },
        {
            title: "Maintenance & Support",
            description: "Reliable maintenance services to ensure the longevity and performance of your facilities.",
            icon: Wrench,
            features: ["Preventive Maintenance", "Emergency Repairs", "Facility Management"]
        },
        {
            title: "Shifting Materials",
            description: "Efficient logistics and earthmoving services for safe material transport.",
            icon: ArrowRightLeft,
            features: ["Earth Moving", "Material Haulage", "Logistics Support"]
        }
    ];

    const process = [
        { title: "Consultation", step: "01", desc: "We start by understanding your vision and project requirements." },
        { title: "Planning", step: "02", desc: "Our experts develop a comprehensive roadmap and technical design." },
        { title: "Execution", step: "03", desc: "We implement the plan with precision, using state-of-the-art technology." },
        { title: "Delivery", step: "04", desc: "Final inspection and handover, ensuring everything meets our high standards." },
    ];

    return (
        <div ref={root} className="overflow-hidden bg-white dark:bg-neutral-950">
            {/* Hero Section */}
            <section className="services-hero relative py-32 bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services-bg.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/50 to-neutral-900/90" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 border border-blue-500/30">
                        Our Expertise
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Excellence</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-neutral-300 font-light leading-relaxed">
                        We provide a full spectrum of engineering and construction services, tailored to meet the unique challenges of every project.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-grid py-24 bg-neutral-50 dark:bg-neutral-900/30">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="service-card group p-8 bg-white dark:bg-neutral-900 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 hover:border-blue-500/30 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-blue-600 transition-colors">{service.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 flex-grow">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 pt-6 border-t border-neutral-100 dark:border-neutral-800 mt-auto">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section py-24 bg-white dark:bg-neutral-950">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">Our Workflow</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400">
                            A systematic approach ensuring efficiency and quality at every stage.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -z-10" />

                        {process.map((item, index) => (
                            <div key={index} className="process-step relative pt-8 lg:pt-0">
                                <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-neutral-950 border-4 border-blue-500 rounded-full items-center justify-center z-10 box-content">
                                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                                </div>

                                <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-blue-500 transition-colors text-center group">
                                    <div className="text-5xl font-black text-neutral-200 dark:text-neutral-800 mb-4 group-hover:text-blue-100 dark:group-hover:text-blue-900/30 transition-colors">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-900 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
                    <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                        Contact us today for a free consultation and let's discuss how we can bring your vision to life.
                    </p>
                    <button className="px-10 py-5 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-full transition-all shadow-xl hover:scale-105 inline-flex items-center gap-2">
                        Request a Quote
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
}
