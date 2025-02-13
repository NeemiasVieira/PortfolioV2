'use client';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import { useLanguageStore } from '@/stores/useLanguageStore';
import { useEffect } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import StyledComponentsRegistry from '@/lib/registry';

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
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    if (!messages) {
      const storedLang = getCookie('locale');
      setLanguage(storedLang || 'pt-BR');
    }
  }, [messages, setLanguage]);
  return (
    <html lang={language}>
      <head>
        <title>Neemias Vieira</title>
        <meta name="description" content="Portfólio de Neemias Vieira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="DevNeemias" />
      </head>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages} locale={language} timeZone={timeZone}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
