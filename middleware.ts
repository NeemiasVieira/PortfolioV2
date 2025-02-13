import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'pt-BR'];
const defaultLocale = 'pt-BR';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  const userLang = req.headers.get('accept-language')?.split(',')[0] || defaultLocale;
  const locale = locales.includes(userLang) ? userLang : defaultLocale;

  const response = NextResponse.next();
  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });
}

export const config = {
  matcher: '/',
};
