import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { storageService } from '.';

export const useGlobalStore = create<IGlobalState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (newUser: IUser | null) => set({ user: newUser }),
        }),
        {
            name: 'global-storage',
            storage: storageService,
        }
    )
);
