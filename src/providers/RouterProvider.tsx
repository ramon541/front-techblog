import { type JSX } from 'react';
import {
    createBrowserRouter,
    RouterProvider as RouterProviderLib,
} from 'react-router';

import { AuthContextProvider, RequireAuth } from './auth';
import { Layout } from '../components/layout';
import {
    Landing,
    Login,
    Home,
    ArticleDetail,
    ArticleCreate,
    ArticleEdit,
} from '../pages';

//= =================================================================================
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/login', element: <Login /> },
            { path: '/home', element: <Home /> },
            {
                path: '/articles',
                children: [
                    { path: ':id', element: <ArticleDetail /> },
                    {
                        path: 'new',
                        element: (
                            <RequireAuth>
                                <ArticleCreate />
                            </RequireAuth>
                        ),
                    },
                    {
                        path: ':id/edit',
                        element: (
                            <RequireAuth>
                                <ArticleEdit />
                            </RequireAuth>
                        ),
                    },
                ],
            },
        ],
    },
]);

//= =================================================================================
export default function RouterProvider(): JSX.Element {
    return (
        <AuthContextProvider>
            <RouterProviderLib router={router} />
        </AuthContextProvider>
    );
}
