import { lightTheme, darkTheme } from '../styles/theme';
import { createContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const THEME_MODE = {
  LIGHT: 'LIGHT',
  DARK: 'DART',
  LS_KEY: 'THEME',
} as const;

type ThemeMode = (typeof THEME_MODE)[keyof typeof THEME_MODE];

export interface Theme {
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

export const ThemeContext = createContext<Theme | null>(null);

const getThemeByLocalStorage = (): ThemeMode => {
  const theme = localStorage.getItem(THEME_MODE.LS_KEY);
  return theme === THEME_MODE.DARK ? THEME_MODE.DARK : THEME_MODE.LIGHT;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(THEME_MODE.LIGHT);
  const themeObject = themeMode === THEME_MODE.LIGHT ? lightTheme : darkTheme;

  useEffect(() => {
    const theme = getThemeByLocalStorage();
    setThemeMode(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
