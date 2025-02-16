'use client';
import { ThemeProvider as StyledProvider, createGlobalStyle } from 'styled-components';
import { ReactNode } from 'react';
import { useTheme } from '@/stores/useThemesStore';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease-in-out;
  }

  body::-webkit-scrollbar {
    width: 15px;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.element};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    border: solid ${({ theme }) => theme.colors.element} 2.5px;
  }
`;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, isHydrated } = useTheme();
  if (!isHydrated) {
    return <></>;
  }
  return (
    <StyledProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  );
};
