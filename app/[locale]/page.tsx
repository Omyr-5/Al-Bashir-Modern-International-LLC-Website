import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Home');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
    </main>
  );
}
