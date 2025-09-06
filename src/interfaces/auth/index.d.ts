interface IAuthContext {
    user: IUser | null;
    login: (userData: IUser) => void;
    logout: () => void;
    isAuthenticated: boolean;
}
