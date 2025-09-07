import { Outlet } from 'react-router';
import { Header } from './Header';
import MainContainer from './MainContainer';

export function Layout() {
    return (
        <>
            <Header />
            <MainContainer>
                <Outlet />
            </MainContainer>
        </>
    );
}
