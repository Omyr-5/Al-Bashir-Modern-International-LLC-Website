import { useTranslations } from 'next-intl';

export default function ServicesLoading() {
    const t = useTranslations('Common');
    return (
        <div className="container mx-auto px-4 py-8 animate-pulse">
            <div className="h-8 w-32 bg-gray-200 rounded mb-8"></div>
            <div className="h-10 w-48 bg-gray-200 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
                ))}
            </div>
        </div>
    );
}
