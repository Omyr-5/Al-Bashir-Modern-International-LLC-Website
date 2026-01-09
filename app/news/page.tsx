import { getTranslations } from 'next-intl/server';
import NewsContent from '@/components/NewsContent';

export default async function NewsPage() {
    const t = await getTranslations('Navigation');

    return (
        <main>
            <NewsContent />
        </main>
    );
}
