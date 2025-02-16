'use client';

import { useLanguageStore } from '@/stores/useLanguageStore';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { messages, language } = useLanguageStore();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <NextIntlClientProvider messages={messages} locale={language} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
};
