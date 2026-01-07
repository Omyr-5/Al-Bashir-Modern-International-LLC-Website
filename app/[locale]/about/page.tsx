import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('Navigation');
    return (
        <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">{t('about')}</h1>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
                We are a leading company dedicated to providing top-notch solutions.
                Our history extends back several years of excellence and innovation.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
                Our team is composed of industry experts committed to delivering quality.
            </p>
        </div>
    );
}
