import 'styled-components';

interface ThemeColors {
  primary: string;
  text: string;
  textSecondary: string;
  background: string;
  element: string;
  elementHover: string;
  border: string;
  success: string;
  error: string;
  toggleBackground: string;
  toggleCircle: string;
}

interface ThemeShadows {
  light: string;
  default: string;
  strong: string;
}

export interface ThemeType {
  colors: ThemeColors;
  shadows: ThemeShadows;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
