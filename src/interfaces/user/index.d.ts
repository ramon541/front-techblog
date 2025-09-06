interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
