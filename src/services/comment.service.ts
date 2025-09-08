import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { requestApi } from './requestApi';

//= =================================================================================
const getCommentsByArticleId = async (articleId: string) =>
    await requestApi<TGetCommentsByArticleIdResponse>({
        method: 'get',
        endpoint: `/api/comments/article/${articleId}`,
    });

export const useGetCommentsByArticleIdQuery = (articleId: string) =>
    useQuery({
        queryKey: ['comments', 'article', articleId],
        queryFn: () => getCommentsByArticleId(articleId),
        enabled: !!articleId,
    });

//= =================================================================================

const createComment = async (data: TCreateCommentPayload) =>
    await requestApi<TCreateCommentResponse>({
        method: 'post',
        endpoint: '/api/comments/create',
        data,
    });

export const useCreateCommentMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['comments', 'create'],
        mutationFn: (data: TCreateCommentPayload) => createComment(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['comments'],
            });
        },
    });
};
