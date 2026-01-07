'use client';

import { Link, usePathname } from '@/lib/navigation';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/news', label: 'News' },
    { href: '/jobs', label: 'Jobs' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        <Link href="/">Portfolio</Link>
                    </div>
                    <div className="flex space-x-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 ${pathname === link.href ? 'font-bold underline' : ''
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
