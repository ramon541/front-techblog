import type { JSX, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

export default function ToastProvider({
    children,
}: PropsWithChildren): JSX.Element {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    );
}
