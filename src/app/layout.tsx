import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>Neemias Vieira</title>
        <meta name="description" content="Portfólio de Neemias Vieira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="DevNeemias" />
      </head>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <LanguageProvider>
              <Header />
              {children}
              <Footer />
            </LanguageProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
