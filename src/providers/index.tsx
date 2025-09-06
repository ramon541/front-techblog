import ReactQueryProvider from './ReactQueryProvider';
import RouterProvider from './RouterProvider';

export default function Providers() {
    return (
        <ReactQueryProvider>
            <RouterProvider />
        </ReactQueryProvider>
    );
}
