import useDarkMode from 'hooks/useDarkMode';
import SunnyIcon from 'public/images/sunny.svg';
import MoonIcon from 'public/images/moon.svg';
import { THEME_MODE } from 'context/ThemeProvider';
import * as style from './darkModeBtn.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

// Todo: background: gradient 다크모드 적용 해야함
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
