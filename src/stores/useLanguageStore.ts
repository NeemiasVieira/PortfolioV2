'use client';
import { create } from 'zustand';
import ptBR from '../../public/locales/pt-BR.json';
import en from '../../public/locales/en.json';

const getCookie = (name: string) => {
  if (typeof document === 'undefined') return '';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return '';
};

type LanguageState = {
  language: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: Record<string, any>;
  setLanguage: (language: string) => void;
};

export const useLanguageStore = create<LanguageState>((set) => {
  const initialLang = getCookie('locale') || 'pt-BR';

  return {
    language: initialLang,
    messages: initialLang === 'en' ? en : ptBR,
    setLanguage: (language) => {
      if (typeof document !== 'undefined') {
        document.cookie = `locale=${language}; path=/; max-age=${60 * 60 * 24 * 365}`;
      }
      set({ language, messages: language === 'en' ? en : ptBR });
    },
  };
});
