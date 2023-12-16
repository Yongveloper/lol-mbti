import { useCallback, useEffect, useContext } from 'react';
import {
  DARK,
  LIGHT,
  LS_KEY,
  Theme,
  ThemeContext,
} from 'context/ThemeProvider';

const useDarkMode = (): [string | undefined, () => void] => {
  const { themeMode, setThemeMode } = useContext(ThemeContext) as Theme;

  const switchTheme = useCallback(() => {
    if (themeMode === LIGHT) {
      localStorage.setItem(LS_KEY, DARK);
      setThemeMode(DARK);
    } else {
      localStorage.setItem(LS_KEY, LIGHT);
      setThemeMode(LIGHT);
    }
  }, [themeMode, setThemeMode]);

  return [themeMode, switchTheme];
};

export default useDarkMode;
