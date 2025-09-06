import { type JSX, type ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from './useAuth';

interface RequireAuthProps {
    children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps): JSX.Element {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}
