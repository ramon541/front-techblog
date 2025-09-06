import { Outlet } from 'react-router';
import { Header } from './Header';

export function Layout() {
    return (
        <div className="min-h-dvh bg-white">
            <Header />
            <Outlet />
        </div>
    );
}
