'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, Construction } from 'lucide-react';

export default function ContactPage() {
    const root = useRef<HTMLDivElement>(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-hero > *', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power4.out'
            });

            gsap.fromTo('.info-card',
                {
                    x: -50,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.3
                }
            );

            gsap.from('.contact-form-box', {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            });
        }, root);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitting(false);
        setSubmitted(true);
    };

    const contactInfo = [
        { icon: Phone, title: "Comm. Line", detail: "+968 2456 7890", sub: "Available 08:00 - 17:00 GST", color: "text-ind-yellow" },
        { icon: Mail, title: "Base Intel", detail: "ops@albashir.com", sub: "24-Hour Response Protocol", color: "text-ind-yellow" },
        { icon: MapPin, title: "Global HQ", detail: "Muscat, Oman", sub: "Industrial Zone, Block 4", color: "text-ind-yellow" },
    ];

    return (
        <div ref={root} className="min-h-screen bg-bg-light">
            {/* 1. HERO SECTION */}
            <section className="contact-hero relative pt-32 pb-48 bg-brand-green text-white overflow-hidden border-b-8 border-ind-yellow">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-3 py-1 bg-accent-warning text-white text-[10px] font-black uppercase mb-6 tracking-widest">HQ COMMS</span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter uppercase italic leading-[0.8]">
                        Open the <br /> <span className="text-ind-yellow">Channel.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl font-bold text-white/70 uppercase">Ready to deploy. Contact our technical team for fleet quotes and project analysis.</p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-32 relative z-20 pb-32">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* INFO BOXES */}
                    <div className="lg:col-span-1 space-y-4">
                        {contactInfo.map((info, i) => (
                            <div key={i} className="info-card p-10 bg-white border-l-[12px] border-ind-yellow shadow-2xl flex items-start gap-8 group hover:bg-brand-green transition-all duration-500">
                                <div className={`w-14 h-14 rounded-none bg-bg-light flex items-center justify-center transition-all group-hover:bg-ind-yellow group-hover:text-brand-green ${info.color}`}>
                                    <info.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{info.title}</h3>
                                    <div className="text-2xl font-black text-brand-green group-hover:text-white transition-colors uppercase leading-none mb-1">{info.detail}</div>
                                    <div className="text-xs font-bold text-slate-500 group-hover:text-white/40 uppercase tracking-tight">{info.sub}</div>
                                </div>
                            </div>
                        ))}

                        {/* SOCIAL */}
                        <div className="info-card p-10 bg-ind-yellow text-brand-green shadow-xl border-l-[12px] border-brand-green">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 italic">Social Network</h3>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-12 h-12 bg-brand-green text-ind-yellow flex items-center justify-center hover:bg-white hover:text-brand-green transition-all shadow-lg">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="lg:col-span-2">
                        <div className="contact-form-box bg-white p-12 md:p-20 border-t-[12px] border-brand-green shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-ind-yellow transform translate-x-12 -translate-y-12 rotate-45" />

                            {submitted ? (
                                <div className="text-center py-20 animate-pulse">
                                    <Construction className="w-24 h-24 text-ind-yellow mx-auto mb-10" />
                                    <h2 className="text-5xl font-black text-brand-green uppercase italic tracking-tighter">Intel Received.</h2>
                                    <p className="text-slate-500 font-bold uppercase mt-4">Our ops team will establish contact within 24 hours.</p>
                                    <button onClick={() => setSubmitted(false)} className="mt-10 text-ind-yellow bg-brand-green px-10 py-4 font-black uppercase text-[10px] tracking-widest shadow-xl">SEND NEW LOG</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-10 group/form">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Operator Name</label>
                                            <input required type="text" placeholder="Designation / Name" className="w-full px-6 py-5 bg-bg-light border-b-4 border-slate-200 outline-none focus:border-ind-yellow transition-all font-black uppercase text-xs" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Comms Channel (Email)</label>
                                            <input required type="email" placeholder="name@company.com" className="w-full px-6 py-5 bg-bg-light border-b-4 border-slate-200 outline-none focus:border-ind-yellow transition-all font-black uppercase text-xs" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Intelligence Summary</label>
                                        <input required type="text" placeholder="Subject of Report" className="w-full px-6 py-5 bg-bg-light border-b-4 border-slate-200 outline-none focus:border-ind-yellow transition-all font-black uppercase text-xs" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Detailed Briefing</label>
                                        <textarea required rows={6} placeholder="Project requirements, site location, fleet needs..." className="w-full px-6 py-5 bg-bg-light border-b-4 border-slate-200 outline-none focus:border-ind-yellow transition-all font-black uppercase text-xs resize-none"></textarea>
                                    </div>
                                    <button type="submit" disabled={submitting} className="w-full md:w-auto px-16 py-6 bg-ind-yellow text-brand-green font-black uppercase text-sm tracking-widest hover:bg-brand-green hover:text-white transition-all shadow-2xl disabled:opacity-50 flex items-center justify-center gap-4">
                                        {submitting ? 'Transmitting...' : 'Initiate Contact'}
                                        {!submitting && <Send className="w-5 h-5" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
