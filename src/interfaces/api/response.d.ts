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

interface IGetArticleByIdWithRelations extends IArticle {
    author: {
        name: string;
    };
    tags: Array<{
        tagId: string;
        tag: {
            name: string;
        };
    }>;
}

type TGetArticleByIdResponse = IGetArticleByIdWithRelations;

type TGetUserByIdResponse = IUser;

interface ICommentWithRelations extends IComment {
    user: {
        id: string;
        name: string;
        avatar: string | null;
        createdAt?: string;
        email?: string;
    };
    replies?: Array<ICommentWithRelations>;
}

type TGetCommentsByArticleIdResponse = Array<ICommentWithRelations>;

type TCreateCommentResponse = IComment;
