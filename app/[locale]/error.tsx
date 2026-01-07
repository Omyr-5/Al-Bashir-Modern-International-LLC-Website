'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Error({
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
        <div className="flex h-screen w-full flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">{t('error')}</h2>
            <button
                onClick={() => reset()}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                {t('retry')}
            </button>
        </div>
    );
}
