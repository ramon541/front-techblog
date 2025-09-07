import { useQuery } from '@tanstack/react-query';
import { requestApi } from './requestApi';

//= =================================================================================
const searchArticles = async (params: {
    term: string | null;
    tagId: string | null;
    page?: number;
    limit?: number;
}) => {
    const searchParams = new URLSearchParams();

    if (params.term) searchParams.append('term', params.term);

    if (params.tagId) {
        searchParams.append('tagId', params.tagId);
    }

    const queryString = searchParams.toString();
    const endpoint = queryString
        ? `/api/articles/search?${queryString}&page=${params.page || 1}&limit=${
              params.limit || 6
          }`
        : `/api/articles/search?page=${params.page || 1}&limit=${
              params.limit || 6
          }`;

    return await requestApi<TSearchArticlesResponse>({
        method: 'get',
        endpoint,
    });
};

export const useSearchArticlesQuery = (params: {
    term: string | null;
    tagId: string | null;
    page?: number;
    limit?: number;
}) =>
    useQuery({
        queryKey: ['articles', 'search', params],
        queryFn: () => searchArticles(params),
    });
