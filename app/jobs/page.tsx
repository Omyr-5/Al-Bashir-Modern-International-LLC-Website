import { getTranslations } from 'next-intl/server';
import { Job } from '@/types/job';

async function getJobs(): Promise<Job[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [
        { id: '1', title: 'Senior Engineer', location: 'Dubai', type: 'Full-time', description: 'Lead engineering projects.' },
        { id: '2', title: 'Site Supervisor', location: 'Abu Dhabi', type: 'Contract', description: 'Oversee site operations.' },
    ];
}

export default async function JobsPage() {
    const t = await getTranslations('Navigation');
    const jobs = await getJobs();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{t('jobs')}</h1>
            <div className="space-y-4">
                {jobs.map((job) => (
                    <div key={job.id} className="border p-6 rounded-lg flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div>
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <p className="text-gray-600">{job.location} • {job.type}</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
