'use client';

import useDarkMode from 'src/hooks/useDarkMode';
import SunnyIcon from 'public/images/sunny.svg';
import MoonIcon from 'public/images/moon.svg';
import { THEME_MODE } from 'src/context/ThemeProvider';
import * as style from './darkModeBtn.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const DarkModeBtn = () => {
  const [themeMode, switchMode] = useDarkMode();
  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={switchMode}
        aria-label="DarkModeBtn"
      >
        <SunnyIcon
          className={style.svg}
          style={assignInlineVars({
            [style.lightMode]: themeMode === THEME_MODE.LIGHT ? '0' : '100px',
          })}
        />
        <MoonIcon
          className={style.svg}
          style={assignInlineVars({
            [style.darkMode]: themeMode === THEME_MODE.LIGHT ? '-100px' : '0',
          })}
        />
      </button>
    </div>
  );
};

export default DarkModeBtn;
