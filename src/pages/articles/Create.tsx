import type { JSX } from 'react';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { useAuth } from '../../providers/auth';
import {
    newArticleSchema,
    type TNewArticleFormFields,
} from '../../schemas/NewArticleSchema';
import { useCreateArticleMutation } from '../../services/article.service';
import { useGetTagsQuery } from '../../services/tag.service';

import Wrapper from '../../components/layout/Wrapper';
import PageTitle from '../../components/texts/PageTitle';
import ButtonText from '../../components/buttons/ButtonText';
import InputWithError from '../../components/inputs/InputWithError';
import Input from '../../components/inputs/Input';
import Tag from '../../components/tags/Tag';
import TagSkeleton from '../../components/tags/TagSkeleton';
import { useNavigate } from 'react-router';

//= =================================================================================
export function Create(): JSX.Element {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { data: tags, isLoading: isLoadingTags } = useGetTagsQuery();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
        setValue,
    } = useForm<TNewArticleFormFields>({
        resolver: zodResolver(newArticleSchema),
        defaultValues: {
            title: '',
            content: '',
            image: '',
            tagIds: [],
            authorId: user?.id || '',
        },
    });

    const { mutate: createArticle } = useCreateArticleMutation();
    const selectedTagIds = watch('tagIds') || [];

    //= =================================================================================
    const handleTagClick = (tagId: string) => {
        const currentTags = selectedTagIds;
        const isSelected = currentTags.includes(tagId);

        if (isSelected) {
            setValue(
                'tagIds',
                currentTags.filter((id) => id !== tagId)
            );
        } else {
            setValue('tagIds', [...currentTags, tagId]);
        }
    };

    //= =================================================================================
    const onSubmit: SubmitHandler<TNewArticleFormFields> = async (data) => {
        try {
            if (!user) throw new Error('Usuário não autenticado');

            createArticle(
                {
                    title: data.title,
                    content: data.content,
                    tagIds: data.tagIds,
                    authorId: user.id,
                    image: data.image || null,
                },
                {
                    onSuccess: ({ message }) => {
                        toast.success(message);
                        reset();
                        navigate('/home');
                    },
                    onError: (error) => {
                        const errorMessage =
                            (error as unknown as IApiErrorResponse)?.error ||
                            'Servidor indisponível no momento!';
                        toast.error(`Erro ao criar artigo: ${errorMessage}`);
                    },
                }
            );
        } catch (error) {
            const errorMessage =
                (error as IApiErrorResponse)?.error ||
                'Servidor indisponível no momento!';
            toast.error(`Erro ao criar artigo: ${errorMessage}`);
        }
    };

    //= =================================================================================
    return (
        <Wrapper>
            <form
                className="w-full flex flex-col gap-6"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 md:flex-row justify-between">
                    <PageTitle title="Novo artigo" />
                    <ButtonText
                        type="submit"
                        text={isSubmitting ? 'Criando...' : 'Criar artigo'}
                        disabled={isSubmitting}
                    />
                </div>
                <InputWithError
                    label="Título do artigo*"
                    errorMessage={errors.title?.message}>
                    <Input
                        id="title"
                        placeholder="Digite o título do artigo..."
                        {...register('title')}
                    />
                </InputWithError>

                <InputWithError
                    label="Imagem do artigo"
                    errorMessage={errors.image?.message}>
                    <Input
                        id="image"
                        placeholder="https://exemplo.com/imagem.jpg"
                        {...register('image')}
                    />
                </InputWithError>

                <InputWithError
                    label={`Tags* ${selectedTagIds.length}/3 selecionadas`}
                    variant="none"
                    errorMessage={errors.tagIds?.message}>
                    {isLoadingTags ? (
                        <TagSkeleton count={8} />
                    ) : (
                        <div className="flex gap-2 flex-wrap">
                            {tags?.data.map((tag) => {
                                const isSelected = selectedTagIds.includes(
                                    tag.id
                                );
                                const isDisabled =
                                    !isSelected && selectedTagIds.length >= 3;

                                return (
                                    <Tag
                                        key={tag.id}
                                        tagId={tag.id}
                                        type="button"
                                        size="medium"
                                        name={tag.name}
                                        isSelected={isSelected}
                                        onClick={
                                            isDisabled
                                                ? undefined
                                                : handleTagClick
                                        }
                                        className={
                                            isDisabled
                                                ? 'opacity-50 cursor-not-allowed'
                                                : ''
                                        }
                                    />
                                );
                            })}
                        </div>
                    )}
                </InputWithError>

                <InputWithError
                    label="Conteúdo*"
                    errorMessage={errors.content?.message}>
                    <textarea
                        id="content"
                        placeholder="Escreva o conteúdo do seu artigo..."
                        className="placeholder-text-placeholder min-h-[200px] resize-y w-full p-4"
                        {...register('content')}
                    />
                </InputWithError>
            </form>
        </Wrapper>
    );
}
