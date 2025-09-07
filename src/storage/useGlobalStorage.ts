import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { storageService } from '.';

export const useGlobalStore = create<IGlobalState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (newUser) => set({ user: newUser }),
        }),
        {
            name: 'global-storage',
            storage: storageService,
        }
    )
);
