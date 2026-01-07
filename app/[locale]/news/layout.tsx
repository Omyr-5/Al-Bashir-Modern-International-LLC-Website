import { useTranslations } from 'next-intl';

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const t = useTranslations('Navigation');
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="mb-8 border-b pb-4">
                <h2 className="text-sm uppercase tracking-wide text-gray-500">{t('news')}</h2>
            </header>
            {children}
        </div>
    );
}
