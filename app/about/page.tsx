import { getTranslations } from 'next-intl/server';
import AboutContent from '@/components/AboutContent';

export default async function AboutPage() {
    const t = await getTranslations('Navigation');
    // We can pass translations or other server-side data to the client component here
    return <AboutContent />;
}
