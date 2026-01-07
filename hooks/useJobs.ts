import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { Job } from '@/types/job';

const fetchJobs = async (): Promise<Job[]> => {
    const { data } = await api.get('/jobs');
    return data;
};

export const useJobs = () => {
    return useQuery({
        queryKey: ['jobs'],
        queryFn: fetchJobs,
    });
};
