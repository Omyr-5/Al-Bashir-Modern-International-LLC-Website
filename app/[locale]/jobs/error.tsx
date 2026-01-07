'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function JobsError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const t = useTranslations('Common');

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-xl font-bold mb-4 text-red-600">{t('error')}</h2>
            <button
                onClick={() => reset()}
                className="rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
            >
                {t('retry')}
            </button>
        </div>
    );
}
