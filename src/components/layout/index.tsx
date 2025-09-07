import { Outlet } from 'react-router';

import { Header } from './Header';
import MainContainer from './MainContainer';
import type { JSX } from 'react';

//= =================================================================================
export function Layout(): JSX.Element {
    return (
        <>
            <Header />
            <MainContainer>
                <Outlet />
            </MainContainer>
        </>
    );
}
