interface IUser {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

interface ITag {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

interface IComment {
    id: string;
    content: string;
    userId: string;
    articleId: string;
    parentId?: string;
    createdAt: string;
    updatedAt: string;

    // Relations
    user?: IUser;
    replies?: IComment[];
}

interface IArticle {
    id: string;
    title: string;
    content: string;
    image?: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;

    // Relations
    author?: IUser;
    tags?: ITag[];
    comments?: IComment[];
}
