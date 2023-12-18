import { useCallback, useContext } from 'react';
import { THEME_MODE, Theme, ThemeContext } from 'context/ThemeProvider';

const useDarkMode = (): [string, () => void] => {
  const { themeMode, setThemeMode } = useContext(ThemeContext) as Theme;

  const switchTheme = useCallback(() => {
    if (themeMode === THEME_MODE.LIGHT) {
      localStorage.setItem(THEME_MODE.LS_KEY, THEME_MODE.DARK);
      setThemeMode(THEME_MODE.DARK);
    } else {
      localStorage.setItem(THEME_MODE.LS_KEY, THEME_MODE.LIGHT);
      setThemeMode(THEME_MODE.LIGHT);
    }
  }, [themeMode, setThemeMode]);

  return [themeMode, switchTheme];
};

export default useDarkMode;
