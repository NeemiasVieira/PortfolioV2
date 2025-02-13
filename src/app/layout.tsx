'use client';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import { useLanguageStore } from '@/stores/useLanguageStore';
import { useEffect } from 'react';
import { NextIntlClientProvider } from 'next-intl';

const getCookie = (name: string) => {
  if (typeof document === 'undefined') return '';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return '';
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { language, setLanguage, messages } = useLanguageStore();
  useEffect(() => {
    const storedLang = getCookie('locale');
    if (storedLang && storedLang !== language) {
      setLanguage(storedLang);
    }
  }, [language, setLanguage]);
  return (
    <html lang="pt-BR">
      <head>
        <title>Neemias Vieira</title>
        <meta name="description" content="Portfólio de Neemias Vieira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages} locale={language}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
