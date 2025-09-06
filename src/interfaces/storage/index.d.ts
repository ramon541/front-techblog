interface IGlobalState {
    user: IUser | null;
    setUser: (newUser: IUser | null) => void;
}

interface IStorageService {
    getItem: <T>(key: string) => T | null;
    setItem: <T>(key: string, value: T) => void;
    removeItem: (key: string) => void;
    removeAll: VoidFunction;
}
