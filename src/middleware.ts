import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'pt-BR'];
const defaultLocale = 'pt-BR';
const defaultTheme = 'dark';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const response = NextResponse.next();

  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return response;
  }

  const userLang = req.headers.get('accept-language')?.split(',')[0] || defaultLocale;
  const locale = locales.includes(userLang) ? userLang : defaultLocale;

  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });

  const userTheme = req.cookies.get('theme')?.value || defaultTheme;

  response.cookies.set('theme', userTheme, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: '/',
};
