import { getTranslations } from 'next-intl/server';
import JobsContent from '@/components/JobsContent';

export default async function JobsPage() {
    const t = await getTranslations('Navigation');

    return (
        <main>
            <JobsContent />
        </main>
    );
}
