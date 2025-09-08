type TLoginResponse = IUser;

type TGetTagsResponse = Array<ITag>;

interface IArticleWithRelations extends IArticle {
    tags: Array<{
        tagId: string;
        tag: {
            name: string;
        };
    }>;
}

interface IPaginatedArticles {
    items: Array<IArticleWithRelations>;
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}

type TSearchArticlesResponse = IPaginatedArticles;

type TCreateArticleResponse = IArticle;
