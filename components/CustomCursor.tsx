'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only run on desktop to prevent issues on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Center the cursor elements initially
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        const moveCursor = (e: MouseEvent) => {
            // Immediate movement for the center dot
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power3.out'
            });

            // Delayed movement for the follower ring (magnetic feel)
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: 'power3.out'
            });
        };

        const handleHoverStart = () => {
            gsap.to(cursor, { scale: 0.5, opacity: 0, duration: 0.3 });
            gsap.to(follower, {
                scale: 3,
                borderColor: 'transparent',
                backgroundColor: 'rgba(255, 205, 17, 0.2)', // brand yellow with transparency
                duration: 0.3,
            });
        };

        const handleHoverEnd = () => {
            gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
            gsap.to(follower, {
                scale: 1,
                borderColor: '#FFCD11', // brand yellow
                backgroundColor: 'transparent',
                duration: 0.3,
            });
        };

        window.addEventListener('mousemove', moveCursor);

        // Add listeners to all clickable elements
        const clickables = document.querySelectorAll('a, button, input, textarea, .hover-trigger');
        clickables.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        // Observer to handle dynamically added elements
        const observer = new MutationObserver(() => {
            const newClickables = document.querySelectorAll('a, button, input, textarea, .hover-trigger');
            newClickables.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            observer.disconnect();
            clickables.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-accent-yellow rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border-2 border-accent-yellow rounded-full pointer-events-none z-[9998] hidden md:block mix-blend-difference transition-colors duration-300"
            />
        </>
    );
}
