import { useQuery } from '@tanstack/react-query';
import { requestApi } from './requestApi';

//= =================================================================================
const getTags = async () =>
    await requestApi<TGetTagsResponse>({
        method: 'get',
        endpoint: '/api/tags',
    });

export const useGetTagsQuery = () =>
    useQuery({
        queryKey: ['tags'],
        queryFn: getTags,
    });
