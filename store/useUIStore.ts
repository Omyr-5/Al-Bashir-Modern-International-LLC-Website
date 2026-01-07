import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type UIState = {
    isMenuOpen: boolean;
    theme: 'light' | 'dark';
};

type UIActions = {
    toggleMenu: () => void;
    setTheme: (theme: 'light' | 'dark') => void;
    closeMenu: () => void;
};

export const useUIStore = create<UIState & UIActions>()(
    immer((set) => ({
        isMenuOpen: false,
        theme: 'light',
        toggleMenu: () =>
            set((state) => {
                state.isMenuOpen = !state.isMenuOpen;
            }),
        closeMenu: () =>
            set((state) => {
                state.isMenuOpen = false;
            }),
        setTheme: (theme) =>
            set((state) => {
                state.theme = theme;
            }),
    }))
);
