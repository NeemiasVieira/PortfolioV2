import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'pt-BR'];
const defaultLocale = 'pt-BR';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Verifica se o caminho já inclui um idioma válido
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // Obtém o idioma do cabeçalho 'Accept-Language', ou usa o idioma padrão
  const userLang = req.headers.get('accept-language')?.split(',')[0] || defaultLocale;
  const locale = locales.includes(userLang) ? userLang : defaultLocale;

  // Define um cookie para armazenar o idioma
  const response = NextResponse.next();
  response.cookies.set('locale', locale, {
    path: '/', // Disponível em todas as páginas
    maxAge: 60 * 60 * 24 * 365, // 1 ano
  });

  // Redireciona para a URL com o idioma detectado
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

export const config = {
  matcher: '/',
};
