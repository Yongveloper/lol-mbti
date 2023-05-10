import { useCallback, useEffect, useContext } from 'react';
import { Theme, ThemeContext } from 'src/context/ThemeProvider';

const useDarkMode = (): [string | undefined, () => void] => {
  const LS_KEY = 'theme';
  const LIGHT = 'light';
  const DARK = 'dark';
  const { themeMode, setThemeMode } = useContext(ThemeContext) as Theme;

  const switchTheme = useCallback(() => {
    if (themeMode === LIGHT) {
      window.localStorage.setItem(LS_KEY, DARK);
      setThemeMode(DARK);
    } else {
      window.localStorage.setItem(LS_KEY, LIGHT);
      setThemeMode(LIGHT);
    }
  }, [themeMode, setThemeMode]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem(LS_KEY);
    const initialState = localTheme ? localTheme : LIGHT;
    setThemeMode(initialState);
  }, [setThemeMode]);

  return [themeMode, switchTheme];
};

export default useDarkMode;
