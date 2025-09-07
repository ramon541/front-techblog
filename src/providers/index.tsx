import ReactQueryProvider from './ReactQueryProvider';
import RouterProvider from './RouterProvider';
import ToastProvider from './ToastProvider';

export default function Providers() {
    return (
        <ReactQueryProvider>
            <ToastProvider>
                <RouterProvider />
            </ToastProvider>
        </ReactQueryProvider>
    );
}
