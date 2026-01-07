import { useTranslations } from 'next-intl';
import { Project } from '@/types/project';

// Component to simulate server data fetching
async function getProjects(): Promise<Project[]> {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
        { id: '1', title: 'Project Alpha', description: 'A massive skyscraper.', category: 'Construction' },
        { id: '2', title: 'Project Beta', description: 'Renovation of city center.', category: 'Renovation' },
    ];
}

export default async function ProjectsPage() {
    const t = useTranslations('Navigation');
    const projects = await getProjects();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{t('projects')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="border rounded-lg overflow-hidden shadow-lg">
                        <div className="h-48 bg-gray-200"></div>
                        <div className="p-6">
                            <span className="text-xs font-bold text-blue-600 uppercase mb-2 block">{project.category}</span>
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
