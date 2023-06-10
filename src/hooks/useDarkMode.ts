import { useCallback, useEffect, useContext } from 'react';
import { Theme, ThemeContext } from 'src/context/ThemeProvider';

enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}
const LS_KEY = 'theme';

const getThemeFromLocalStorage = (): ThemeMode => {
  const theme = window.localStorage.getItem(LS_KEY);
  return theme === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT;
};

const useDarkMode = (): [string | undefined, () => void] => {
  const { themeMode, setThemeMode } = useContext(ThemeContext) as Theme;

  const switchTheme = useCallback(() => {
    if (themeMode === ThemeMode.LIGHT) {
      window.localStorage.setItem(LS_KEY, ThemeMode.DARK);
      setThemeMode(ThemeMode.DARK);
    } else {
      window.localStorage.setItem(LS_KEY, ThemeMode.LIGHT);
      setThemeMode(ThemeMode.LIGHT);
    }
  }, [themeMode, setThemeMode]);

  useEffect(() => {
    const localTheme = getThemeFromLocalStorage();
    setThemeMode(localTheme);
  }, [setThemeMode]);

  return [themeMode, switchTheme];
};

export default useDarkMode;
