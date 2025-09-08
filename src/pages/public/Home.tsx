import { useEffect, useState, type JSX } from 'react';
import { useNavigate } from 'react-router';

import { useGetTagsQuery } from '../../services/tag.service';
import { useSearchArticlesQuery } from '../../services/article.service';

import ButtonText from '../../components/buttons/ButtonText';
import PageTitle from '../../components/texts/PageTitle';
import Wrapper from '../../components/layout/Wrapper';
import Input from '../../components/inputs/Input';
import InputBase from '../../components/inputs/InputBase';
import Tag from '../../components/tags/Tag';
import TagSkeleton from '../../components/tags/TagSkeleton';
import { useDebounce } from '../../hooks/useDebounce';
import CardArticle from '../../components/cards/CardArticle';
import Pagination from '../../components/layout/Pagination';
import CardArticleSkeleton from '../../components/cards/CardArticleSkeleton';
import { useAuth } from '../../providers/auth';

//= =================================================================================
export function Home(): JSX.Element {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [filterState, setFilterState] = useState<{
        search: string | null;
        tagId: string | null;
    }>({
        search: null,
        tagId: null,
    });
    const [currentPage, setCurrentPage] = useState(1);

    const debouncedSearch = useDebounce(filterState.search, 1000);
    const debouncedTagId = useDebounce(filterState.tagId, 1000);

    const { data: tags, isLoading: isLoadingTags } = useGetTagsQuery();
    const { data: articlesData, isLoading: isLoadingArticles } =
        useSearchArticlesQuery({
            tagId: debouncedTagId,
            term: debouncedSearch,
            page: currentPage,
            limit: 6,
        });

    //= =================================================================================
    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch, debouncedTagId]);

    //= =================================================================================
    function handleTagClick(tagId: string) {
        if (filterState.tagId === tagId)
            setFilterState({ ...filterState, tagId: null });
        else setFilterState({ ...filterState, tagId });
    }

    //= =================================================================================
    function handleNewArticleClick() {
        navigate('/articles/new');
    }

    //= =================================================================================
    return (
        <Wrapper>
            <div className="flex flex-col gap-4 md:flex-row justify-between">
                <PageTitle title="Todos os artigos" />
                {isAuthenticated && (
                    <ButtonText
                        text="Criar artigo"
                        onClick={handleNewArticleClick}
                    />
                )}
            </div>
            <InputBase>
                <Input
                    placeholder="Pesquisar"
                    onChange={(e) =>
                        setFilterState({
                            ...filterState,
                            search: e.target.value,
                        })
                    }
                />
            </InputBase>
            <div className="flex gap-2 flex-wrap">
                {isLoadingTags ? (
                    <TagSkeleton />
                ) : (
                    tags?.data.map((tag) => (
                        <Tag
                            key={tag.id}
                            tagId={tag.id}
                            size="medium"
                            name={tag.name}
                            isSelected={filterState.tagId === tag.id}
                            onClick={handleTagClick}
                        />
                    ))
                )}
            </div>

            <div className="flex flex-col gap-6 w-full">
                {isLoadingArticles ? (
                    <CardArticleSkeleton count={6} />
                ) : (
                    <div className="flex flex-col gap-6 w-full">
                        {articlesData?.data?.items?.map((article) => (
                            <div key={article.id}>
                                <CardArticle
                                    articleId={article.id}
                                    authorId={article.authorId}
                                    content={article.content}
                                    image={
                                        article.image ||
                                        'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    }
                                    tags={article.tags}
                                    title={article.title}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {articlesData?.data.meta &&
                !isLoadingArticles &&
                articlesData.data.items.length > 0 && (
                    <Pagination
                        currentPage={articlesData?.data.meta.page}
                        totalPages={articlesData?.data.meta.totalPages}
                        onPageChange={setCurrentPage}
                        className="mt-4 mb-8"
                    />
                )}
        </Wrapper>
    );
}
