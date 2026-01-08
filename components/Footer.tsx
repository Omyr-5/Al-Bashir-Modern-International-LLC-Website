import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative py-64 px-6 overflow-hidden min-h-[500px] flex items-center justify-center bg-surface-light">
            {/* Background Image Container with Mask */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 26rem)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 26rem)'
                }}
            >
                <Image
                    src="/images/footer-bg.jpg"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                />
                {/* Dark Overlay for text readability */}
                {/* <div className="absolute left-0 right-0 top-[15rem] bg-black/20 h-[15rem]" /> */}
            </div>

            <div className="relative z-10 container mx-auto text-center">
                <div className="text-secondary-charcoal/70 font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 italic">
                    Al Bashir <span className="text-white">Modern.</span>
                </div>
                <div className="mt-10 text-secondary-charcoal/70 text-[10px] uppercase font-bold tracking-[0.4em]">
                    © 1998–2024 Al-Bashir Modern International LLC. Built Heavy.
                </div>
            </div>
        </footer>
    );
}
