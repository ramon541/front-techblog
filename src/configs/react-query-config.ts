import { QueryClient } from '@tanstack/react-query';
import {
    persistQueryClient,
    persistQueryClientRestore,
} from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

import { storageService } from '../storage';

//= ==============================================================================================
const persistor = createAsyncStoragePersister({
    storage: {
        setItem: (key, value) => storageService.setItem(key, value),
        getItem: (key) => storageService.getItem(key),
        removeItem: (key) => storageService.removeItem(key),
    },
});

//= ==============================================================================================
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 1000 * 60 * 5, // 5 minutes
            gcTime: Infinity,
        },
    },
});

//= ==============================================================================================
(async () => {
    try {
        await persistQueryClientRestore({
            queryClient,
            persister: persistor,
        });
    } catch (error) {
        console.warn('Failed to restore query client cache:', error);
    }
})();

//= ==============================================================================================
persistQueryClient({
    queryClient,
    persister: persistor,
    maxAge: Infinity,
});

export { queryClient };
