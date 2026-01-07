import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { Project } from '@/types/project';

const fetchProjects = async (): Promise<Project[]> => {
    const { data } = await api.get('/projects');
    return data;
};

export const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    });
};
