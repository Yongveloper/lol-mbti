import { lightTheme, darkTheme } from '../../styles/theme';
import { createContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const LIGHT = 'light';
export const DARK = 'dark';
export const LS_KEY = 'theme';
export interface Theme {
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<Theme | null>(null);

const getThemeByLocalStorage = () => localStorage.getItem(LS_KEY) || LIGHT;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState(LIGHT);
  const themeObject = themeMode === LIGHT ? lightTheme : darkTheme;

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
