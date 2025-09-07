import type { JSX } from 'react';

import ReactQueryProvider from './ReactQueryProvider';
import RouterProvider from './RouterProvider';
import ToastProvider from './ToastProvider';

export default function Providers(): JSX.Element {
    return (
        <ReactQueryProvider>
            <ToastProvider>
                <RouterProvider />
            </ToastProvider>
        </ReactQueryProvider>
    );
}
