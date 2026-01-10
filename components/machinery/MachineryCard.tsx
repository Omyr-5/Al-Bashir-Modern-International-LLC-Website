'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Machinery } from '@/lib/machinery-data';
import CustomArrow from '@/components/CustomArrow';

interface MachineryCardProps {
    machinery: Machinery;
    index: number;
}

export default function MachineryCard({ machinery, index }: MachineryCardProps) {
    return (
        <Link
            href={`/machinery/${machinery.id}`}
            className="group block bg-white h-full border border-gray-100 hover:border-primary-sand transition-all duration-300 hover:shadow-xl relative overflow-hidden"
        >
            {/* Image Container with Overlay Effect */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-300 z-10" />
                {/* Fallback for placeholder images - in real app would be actual images */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    {/* We use a colored div as placeholder if image fails or for this demo */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                        <span className="text-4xl opacity-20 font-black tracking-tighter uppercase">{machinery.category}</span>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary-sand text-brand-dark text-xs font-bold px-3 py-1 uppercase tracking-wider">
                        {machinery.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 relative">
                <h3 className="text-2xl font-black text-brand-dark mb-3 uppercase italic tracking-tighter group-hover:text-primary-sand-dark transition-colors">
                    {machinery.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">
                    {machinery.description}
                </p>

                <div className="flex items-center text-brand-dark font-bold text-sm uppercase tracking-wide group-hover:gap-4 gap-2 transition-all duration-300">
                    View Specifications
                    <CustomArrow className="w-4 h-4 fill-current text-primary-sand" />
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary-sand/10 clip-path-polygon-[100%_0,0_100%,100%_100%] transition-all duration-300 group-hover:w-16 group-hover:h-16 group-hover:bg-primary-sand/20" />
            </div>
        </Link>
    );
}
