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
    { href: '/news', label: 'News' },
    { href: '/jobs', label: 'Jobs' },
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
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    // Mobile Menu Animation
    useEffect(() => {
        if (mobileMenuOpen) {
            gsap.fromTo(menuRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' }
            );
        }
    }, [mobileMenuOpen]);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
                    ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg border-neutral-200/50 dark:border-neutral-800/50 py-3'
                    : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="relative z-50">
                        <Link href="/" className="group flex items-center gap-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-blue-500/30 shadow-lg group-hover:scale-110 transition-transform">
                                B
                            </div>
                            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-neutral-900 dark:text-white' : 'text-white'
                                }`}>
                                Portfolio
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            const isScrolledOrActive = scrolled || isActive;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group overflow-hidden ${isActive
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : scrolled
                                                ? 'text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    {isActive && (
                                        <span className="absolute inset-0 bg-blue-600 rounded-full -z-0 animate-pulse-slow" />
                                    )}
                                </Link>
                            );
                        })}
                        <button className={`ml-4 px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 ${scrolled
                                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:shadow-lg'
                                : 'bg-white text-blue-900 hover:bg-blue-50 shadow-xl'
                            }`}>
                            Get Quote
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden relative z-50 p-2 rounded-lg transition-colors ${scrolled ? 'text-neutral-900 dark:text-white' : 'text-white'
                            }`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden"
                >
                    <div className="container mx-auto px-6 py-6 flex flex-col space-y-2">
                        {links.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-xl text-lg font-medium transition-colors ${pathname === link.href
                                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600'
                                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
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
