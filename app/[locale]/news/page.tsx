import { useTranslations } from 'next-intl';

async function getNews() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [
        { id: '1', title: 'Company expands to new market', date: '2024-01-15', summary: 'We are opening offices in Riyadh.' },
        { id: '2', title: 'Award for excellence', date: '2023-12-20', summary: 'Received the Gold Standard award.' },
    ];
}

export default async function NewsPage() {
    const t = useTranslations('Navigation');
    const news = await getNews();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{t('news')}</h1>
            <div className="grid gap-6">
                {news.map((item) => (
                    <article key={item.id} className="border-b pb-6 last:border-b-0">
                        <span className="text-sm text-gray-500">{item.date}</span>
                        <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">{item.title}</h2>
                        <p className="text-gray-700">{item.summary}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
