import { useQuery } from '@tanstack/react-query';
import { requestApi } from './requestApi';

//= =================================================================================
const getUserById = async (userId: string) =>
    await requestApi<TGetUserByIdResponse>({
        method: 'get',
        endpoint: `/api/users/${userId}`,
    });

export const useGetUserByIdQuery = (userId: string) =>
    useQuery({
        queryKey: ['users', 'detail', userId],
        queryFn: () => getUserById(userId),
        enabled: !!userId,
    });
