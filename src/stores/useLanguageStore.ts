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
  setLanguage: (language: string) => void;
};

const languageStore = create<LanguageState>((set) => ({
  language: getCookie('locale') || 'pt-BR',
  setLanguage: (language) => {
    document.cookie = `locale=${language}; path=/; max-age=${60 * 60 * 24 * 365}`;
    set({ language });
  },
}));

export const useLanguageStore = () => {
  const store = languageStore();
  const messages = store.language === 'en' ? en : ptBR;
  return {
    messages,
    ...store,
  };
};
