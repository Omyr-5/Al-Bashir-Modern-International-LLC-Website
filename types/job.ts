export interface Job {
    id: string;
    title: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    description: string;
}
