'use client';

import { darkTheme } from '@/assets/themes/dark';
import { lightTheme } from '@/assets/themes/light';
import { ThemeType } from '@/assets/themes/styled';
import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeState {
  selectedTheme: Theme;
  theme: ThemeType;
  setSelectedTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isHydrated: boolean;
}

const getCookie = (name: string): string | undefined => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
};

const setCookie = (name: string, value: string, days = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
};

export const useThemeStore = create<ThemeState>((set) => {
  let storedTheme: Theme = 'dark';

  if (typeof document !== 'undefined') {
    storedTheme = (getCookie('theme') as Theme) || (localStorage.getItem('theme') as Theme) || 'dark';
  }

  return {
    selectedTheme: storedTheme,
    theme: storedTheme === 'light' ? lightTheme : darkTheme,
    isHydrated: false,

    setSelectedTheme: (selectedTheme) => {
      setCookie('theme', selectedTheme);
      localStorage.setItem('theme', selectedTheme);
      set({ selectedTheme, theme: selectedTheme === 'light' ? lightTheme : darkTheme });
    },

    toggleTheme: () => {
      set((state) => {
        const newTheme = state.selectedTheme === 'light' ? 'dark' : 'light';
        setCookie('theme', newTheme);
        localStorage.setItem('theme', newTheme);
        return { selectedTheme: newTheme, theme: newTheme === 'light' ? lightTheme : darkTheme };
      });
    },
  };
});

export const useTheme = () => {
  const { selectedTheme, setSelectedTheme, theme, toggleTheme, isHydrated } = useThemeStore();

  if (typeof document !== 'undefined') {
    const userTheme = (getCookie('theme') as Theme) || (localStorage.getItem('theme') as Theme) || 'dark';

    if (userTheme !== selectedTheme) {
      setSelectedTheme(userTheme);
    }

    if (!isHydrated) useThemeStore.setState({ isHydrated: true });
  }

  return { selectedTheme, theme, toggleTheme, isHydrated };
};
