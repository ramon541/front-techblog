import type { JSX } from 'react';
import { useParams } from 'react-router';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { useAuth } from '../../providers/auth';
import {
    newCommentSchema,
    type TNewCommentFormFields,
} from '../../schemas/NewCommentSchema';
import { useGetArticleByIdQuery } from '../../services/article.service';
import {
    useCreateCommentMutation,
    useGetCommentsByArticleIdQuery,
} from '../../services/comment.service';
import Wrapper from '../../components/layout/Wrapper';
import PageTitle from '../../components/texts/PageTitle';
import Image from '../../components/images/Image';
import Tag from '../../components/tags/Tag';
import Paragraph from '../../components/texts/Paragraph';
import DetailSkeleton from '../../components/layout/skelettons/DetailSkeleton';
import CardComment from '../../components/cards/CardComment';
import InputWithError from '../../components/inputs/InputWithError';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import ButtonText from '../../components/buttons/ButtonText';

//= =================================================================================
export function Detail(): JSX.Element {
    const { user } = useAuth();
    const { id: articleId } = useParams<{ id: string }>();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TNewCommentFormFields>({
        resolver: zodResolver(newCommentSchema),
        defaultValues: {
            articleId: articleId || '',
            content: '',
            userId: user?.id || '',
            parentId: null,
        },
    });

    const {
        data: article,
        isLoading: isLoadingArticle,
        error: articleError,
    } = useGetArticleByIdQuery(articleId!);

    const {
        data: comments,
        isLoading: isLoadingComments,
        error: commentsError,
    } = useGetCommentsByArticleIdQuery(articleId!);

    const { mutate: createComment } = useCreateCommentMutation();

    const articleData = article?.data;
    const commentsData = comments?.data;

    //= =================================================================================
    const onSubmit: SubmitHandler<TNewCommentFormFields> = async (data) => {
        try {
            if (!user) throw new Error('Usuário não autenticado');
            if (!articleId) throw new Error('ID do artigo não encontrado');

            createComment(
                {
                    articleId,
                    content: data.content,
                    userId: user.id,
                    parentId: data.parentId,
                },
                {
                    onSuccess: ({ message }) => {
                        toast.success(message);
                        reset();
                    },
                    onError: (error) => {
                        const errorMessage =
                            (error as unknown as IApiErrorResponse)?.error ||
                            'Servidor indisponível no momento!';
                        toast.error(
                            `Erro ao criar comentário: ${errorMessage}`
                        );
                    },
                }
            );
        } catch (error) {
            const errorMessage =
                (error as IApiErrorResponse)?.error ||
                'Servidor indisponível no momento!';
            toast.error(`Erro ao criar comentário: ${errorMessage}`);
        }
    };

    //= =================================================================================
    if (isLoadingArticle) {
        return (
            <Wrapper>
                <DetailSkeleton />
            </Wrapper>
        );
    }

    //= =================================================================================
    if (articleError || !articleData) {
        return (
            <Wrapper>
                <div className="flex flex-col items-center justify-center py-12">
                    <h2 className="text-xl font-semibold text-text mb-2">
                        Artigo não encontrado
                    </h2>
                    <p className="text-text-secondary">
                        O artigo que você está procurando não existe ou foi
                        removido.
                    </p>
                </div>
            </Wrapper>
        );
    }

    //= =================================================================================
    return (
        <Wrapper>
            <PageTitle title={article?.data.title || ''} />

            <Paragraph
                text={`Publicado por ${articleData?.author?.name} • ${new Date(
                    articleData?.createdAt || ''
                ).toLocaleDateString('pt-BR')}`}
            />

            {article?.data.tags && article?.data.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                    {article?.data.tags.map((tagRelation) => (
                        <Tag
                            key={tagRelation.tagId}
                            tagId={tagRelation.tagId}
                            name={tagRelation.tag.name}
                            isSelected={false}
                        />
                    ))}
                </div>
            )}

            {article?.data.image && (
                <div className="w-full h-64 md:h-80">
                    <Image
                        src={article?.data.image}
                        alt={article?.data.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            )}

            <Paragraph
                text={article?.data.content || ''}
                className="text-text text-base font-medium"
            />

            <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}>
                <InputWithError
                    label="Comentários"
                    errorMessage={errors.content?.message}>
                    <textarea
                        id="content"
                        placeholder="Escreva um comentário..."
                        className="placeholder-text-placeholder min-h-[200px] resize-y w-full p-4"
                        {...register('content')}
                    />
                </InputWithError>

                <ButtonText
                    type="submit"
                    text={isSubmitting ? 'Comentando...' : 'Comentar'}
                    disabled={isSubmitting}
                />
            </form>

            {isLoadingComments ? (
                <div className="flex flex-col gap-4">
                    {Array.from({ length: 3 }, (_, index) => (
                        <div
                            key={index}
                            className="bg-background-secondary rounded-lg p-4 border border-border">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                                <div className="flex flex-col gap-1">
                                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
                                    <div className="h-3 bg-gray-200 rounded w-32 animate-pulse" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : commentsError ? (
                <div className="text-center py-8">
                    <p className="text-text-secondary">
                        Erro ao carregar comentários
                    </p>
                </div>
            ) : commentsData && commentsData.length > 0 ? (
                <div className="flex flex-col gap-6">
                    {commentsData.map((comment) => (
                        <CardComment key={comment.id} comment={comment} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-8">
                    <p className="text-text-secondary">
                        Nenhum comentário ainda.
                    </p>
                    <p className="text-sm text-text-placeholder mt-1">
                        Seja o primeiro a comentar!
                    </p>
                </div>
            )}
            <div className="mb-12" />
        </Wrapper>
    );
}
