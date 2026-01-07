import { getTranslations } from 'next-intl/server';

export default async function ServicesPage() {
    const t = await getTranslations('Navigation');
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{t('services')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Service {i}</h3>
                        <p className="text-gray-600">Description of service {i} offered by our company.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
