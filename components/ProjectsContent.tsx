'use client';

import { useRef, useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Filter, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsContent() {
    const root = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState('All');

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from('.projects-hero > *', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out'
            });

            // Filter Animation
            gsap.from('.filter-btn', {
                y: 20,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
                delay: 0.5,
                ease: 'back.out(1.7)'
            });

        }, root);

        return () => ctx.revert();
    }, []);

    // Animation when filter changes
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.project-card',
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
            );
        }, root);
        return () => ctx.revert();
    }, [filter]);

    const projects = [
        {
            id: 1,
            title: "Skyline Tower",
            category: "Commercial",
            image: "/images/project-commercial.png",
            location: "Downtown District",
            year: "2023"
        },
        {
            id: 2,
            title: "Azure Heights Villa",
            category: "Residential",
            image: "/images/project-residential.png",
            location: "Palm Jumeirah",
            year: "2024"
        },
        {
            id: 3,
            title: "Industrial Complex A",
            category: "Industrial",
            image: "/images/project-industrial.png",
            location: "Industrial Zone",
            year: "2022"
        },
        {
            id: 4,
            title: "City Center Mall",
            category: "Commercial",
            image: "/images/project-commercial.png", // Reusing for demo
            location: "City Center",
            year: "2023"
        },
        {
            id: 5,
            title: "Green Valley Estate",
            category: "Residential",
            image: "/images/project-residential.png", // Reusing for demo
            location: "Suburbs",
            year: "2024"
        },
        {
            id: 6,
            title: "Logistics Hub",
            category: "Industrial",
            image: "/images/project-industrial.png", // Reusing for demo
            location: "Port Area",
            year: "2023"
        }
    ];

    const categories = ['All', 'Commercial', 'Residential', 'Industrial'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div ref={root} className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
            {/* Hero Section */}
            <section className="projects-hero relative py-32 bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/projects-hero.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                        Our <span className="text-blue-500">Work</span>
                    </h1>
                    <p className="max-w-xl text-xl text-neutral-300 font-light leading-relaxed">
                        A showcase of our defining projects, where engineering meets imagination.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="sticky top-20 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-4">
                <div className="container mx-auto px-6 flex items-center justify-between overflow-x-auto no-scrollbar">
                    <div className="flex gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`filter-btn px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-sm text-neutral-500">
                        <Filter className="w-4 h-4" />
                        <span>Filter by Category</span>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="project-card group cursor-pointer">
                                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                            <ArrowUpRight className="w-8 h-8 text-neutral-900" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-neutral-900 dark:text-white">
                                        {project.category}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-neutral-400 text-sm font-mono">{project.year}</span>
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-500">
                                        {project.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
