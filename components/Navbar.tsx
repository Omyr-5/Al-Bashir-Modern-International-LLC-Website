'use client';

import { Link, usePathname } from '@/lib/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/news', label: 'Journal' },
    { href: '/jobs', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initial Animation
    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out', delay: 0.1 }
        );
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${scrolled
                ? 'bg-brand-green shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-ind-yellow py-0'
                : 'bg-brand-green border-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="relative z-50 h-full flex items-center">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="bg-ind-yellow px-4 py-2 transform -skew-x-12 shadow-lg">
                                <span className="text-brand-green font-black text-2xl tracking-tighter italic transform skew-x-12 inline-block">B</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">Al Bashir</span>
                                <span className="text-[10px] font-black tracking-[0.4em] text-ind-yellow uppercase leading-none mt-1">International</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center h-full">
                        {links.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-6 flex items-center h-full text-[11px] font-black uppercase tracking-widest transition-all duration-200 border-b-4 ${isActive
                                        ? 'bg-brand-green-alt border-ind-yellow text-ind-yellow'
                                        : 'border-transparent text-white/70 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <div className="ml-8 h-full flex items-center">
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-ind-yellow text-brand-green font-black text-[11px] uppercase tracking-widest transition-all hover:bg-ind-yellow-dark hover:scale-105 active:scale-95 shadow-xl rounded-none"
                            >
                                Request Quote
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative z-50 p-3 bg-ind-yellow text-brand-green rounded-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    ref={menuRef}
                    className="lg:hidden absolute top-full left-0 right-0 bg-brand-green border-t-4 border-ind-yellow shadow-2xl overflow-hidden"
                >
                    <div className="container mx-auto flex flex-col pt-4 pb-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-8 py-5 text-lg font-black uppercase tracking-widest transition-all border-l-8 ${pathname === link.href
                                    ? 'bg-brand-green-alt border-ind-yellow text-ind-yellow'
                                    : 'border-transparent text-white/70 hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
