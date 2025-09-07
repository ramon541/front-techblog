import type { JSX, PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../configs/react-query-config';

export default function ReactQueryProvider({
    children,
}: PropsWithChildren): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
