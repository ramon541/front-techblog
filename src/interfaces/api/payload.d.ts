interface ILoginPayload {
    email: string;
    password: string;
}

interface ICreateArticlePayload
    extends Omit<IArticle, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'> {
    tagIds: Array<string>;
}

type TCreateCommentPayload = Omit<
    IComment,
    'createdAt' | 'updatedAt' | 'deletedAt' | 'id'
>;
