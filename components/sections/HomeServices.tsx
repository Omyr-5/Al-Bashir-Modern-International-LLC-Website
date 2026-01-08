'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Pickaxe, Construction, Box, Truck, Activity, Cpu, ShieldCheck } from 'lucide-react';
import CustomArrow from '@/components/CustomArrow';

const services = [
    {
        id: 0,
        title: "Drilling Fleet",
        sub: "Deep Earth Geotechnical",
        icon: Pickaxe,
        desc: "Precision extraction and geological sampling at extreme depths. Our fleet utilizes high-torque, computer-controlled rigs for maximum stability.",
        img: "/images/services-bg.png",
        stats: { units: "48 Active", efficiency: "98.4%", safety: "Tier 1" }
    },
    {
        id: 1,
        title: "Civil Works",
        sub: "Massive Infrastructure",
        icon: Construction,
        desc: "Full-scale site transformation, land reclamation, and structural foundation preparation. We engineer the ground for the structures of tomorrow.",
        img: "/images/projects-hero.png",
        stats: { units: "120 Active", efficiency: "94.2%", safety: "Tier 1" }
    },
    {
        id: 2,
        title: "Power Supply",
        sub: "Industrial Energy",
        icon: Box,
        desc: "Reliable power infrastructure and remote site electrification. Our modular energy solutions keep critical operations running 24/7.",
        img: "/images/project-industrial.png",
        stats: { units: "85 units", efficiency: "99.9%", safety: "Gold" }
    },
    {
        id: 3,
        title: "Fleet Hire",
        sub: "Heavy Asset Rental",
        icon: Truck,
        desc: "Direct access to our premium CAT and Komatsu inventory. Available for specialized deployment with full technical support.",
        img: "/images/project-commercial.png",
        stats: { units: "400+ Units", efficiency: "100%", safety: "Premium" }
    }
];

export default function HomeServices() {
    const [activeId, setActiveId] = useState(0);

    return (
        <section className="relative bg-brand-dark min-h-screen flex flex-col overflow-hidden">
            {/* Background Image Layer (Active Image) */}
            <div className="absolute inset-0 z-0">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeId === service.id ? 'opacity-40' : 'opacity-0'}`}
                    >
                        <Image
                            src={service.img}
                            alt={service.title}
                            fill
                            className="object-cover scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
                    </div>
                ))}
            </div>

            {/* Content Layer */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col h-full py-32 flex-grow">

                {/* Section Title */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-accent-yellow" />
                        <span className="text-accent-yellow font-black uppercase text-xs tracking-widest">Fleet Capabilities</span>
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8]">
                        The <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-white">Technical Edge.</span>
                    </h2>
                </div>

                {/* Vertical Strips Container */}
                <div className="flex-grow flex flex-col border-t border-white/10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setActiveId(service.id)}
                            className={`group relative flex flex-col md:flex-row items-center border-b border-white/5 transition-all duration-700 cursor-pointer overflow-hidden ${activeId === service.id ? 'flex-[2] bg-accent-yellow/5' : 'flex-1 hover:bg-white/5'}`}
                        >
                            <div className="flex flex-col md:flex-row items-center w-full py-10">
                                {/* Number & Icon */}
                                <div className="flex items-center gap-12 w-full md:w-1/3 px-8 mb-8 md:mb-0">
                                    <span className={`text-4xl md:text-6xl font-black italic tracking-tighter transition-all duration-300 ${activeId === service.id ? 'text-accent-yellow scale-125' : 'text-white/20'}`}>
                                        0{service.id + 1}
                                    </span>
                                    <div className={`w-14 h-14 flex items-center justify-center transition-all ${activeId === service.id ? 'bg-accent-yellow text-brand-dark' : 'bg-white/5 text-white/30'}`}>
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Title & Sub */}
                                <div className="w-full md:w-1/3 px-8 text-center md:text-left transition-all duration-500">
                                    <h3 className={`text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-2 transition-colors ${activeId === service.id ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                                        {service.title}
                                    </h3>
                                    <div className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all ${activeId === service.id ? 'text-accent-yellow opacity-100 translate-x-0' : 'text-white/20 opacity-0 -translate-x-4'}`}>
                                        {service.sub}
                                    </div>
                                </div>

                                {/* Details (Revealed on active using Grid Trick) */}
                                <div className={`w-full md:w-1/3 px-8 grid transition-all duration-700 ease-in-out ${activeId === service.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-white/70 font-bold uppercase text-xs tracking-widest leading-relaxed mb-10 max-w-sm pt-4">
                                            {service.desc}
                                        </p>

                                        {/* Tech Stats */}
                                        <div className="grid grid-cols-3 gap-6 mb-10">
                                            <div className="flex flex-col gap-1">
                                                <Activity className="w-4 h-4 text-accent-yellow opacity-50" />
                                                <div className="text-[10px] font-black text-white uppercase">{service.stats.units}</div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <Cpu className="w-4 h-4 text-accent-yellow opacity-50" />
                                                <div className="text-[10px] font-black text-white uppercase">{service.stats.efficiency}</div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <ShieldCheck className="w-4 h-4 text-accent-yellow opacity-50" />
                                                <div className="text-[10px] font-black text-white uppercase">{service.stats.safety}</div>
                                            </div>
                                        </div>

                                        <button className="flex items-center gap-3 text-accent-yellow font-black uppercase text-[10px] tracking-widest border-b-2 border-accent-yellow/30 pb-2 hover:border-accent-yellow transition-all group/btn">
                                            INQUIRE SPECIFICATIONS <CustomArrow className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Corner Tech Decor */}
                            <div className={`absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-accent-yellow/20 transition-all duration-1000 ${activeId === service.id ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Scanning Line Decor */}
            <div className="absolute top-0 right-[15%] w-[1px] h-full bg-white/5 z-0" />
            <div className="absolute top-0 right-[15.5%] w-[1px] h-full bg-accent-yellow/10 z-0" />
        </section>
    );
}
