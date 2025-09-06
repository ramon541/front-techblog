import { type JSX, type PropsWithChildren } from 'react';
import { useGlobalStore } from '../../storage/useGlobalStorage';
import { AuthContext } from './AuthContext';

export function AuthContextProvider({
    children,
}: PropsWithChildren): JSX.Element {
    const { user, setUser } = useGlobalStore();

    const login = (userData: IUser) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const isAuthenticated = user !== null;

    const value: IAuthContext = {
        user,
        login,
        logout,
        isAuthenticated,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
