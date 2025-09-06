import { Outlet } from 'react-router';
import { Header } from './Header';

export function Layout() {
    return (
        <div className="min-h-dvh bg-gray-50">
            <Header />
            {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> */}
            <Outlet />
            {/* </main> */}
        </div>
    );
}
