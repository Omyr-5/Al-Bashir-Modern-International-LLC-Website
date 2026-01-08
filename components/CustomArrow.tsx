import React from 'react';

interface CustomArrowProps {
    className?: string; // Allow passing standard Tailwind classes
    direction?: 'right' | 'up-right';
}

export default function CustomArrow({ className = "w-6 h-6", direction = 'right' }: CustomArrowProps) {
    // Base rotation for right arrow is 0deg. up-right is -45deg.
    const rotation = direction === 'up-right' ? 'rotate-[-45deg]' : '';

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="miter"
            className={`${className} ${rotation} transition-transform`}
        >
            {/* Industrial Shaft with a notch */}
            <path d="M2 12H16" />
            <rect x="2" y="10.5" width="2" height="3" fill="currentColor" stroke="none" />

            {/* Sharp technical arrowhead */}
            <path d="M13 5L20 12L13 19" />
        </svg>
    );
}
