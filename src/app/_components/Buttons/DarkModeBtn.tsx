'use client';

import SunnyIcon from 'public/images/sunny.svg';
import MoonIcon from 'public/images/moon.svg';
import * as style from './darkModeBtn.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={style.container} />;

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        aria-label="DarkModeBtn"
      >
        <SunnyIcon
          className={style.svg}
          style={assignInlineVars({
            [style.lightMode]: resolvedTheme === 'light' ? '0' : '100px',
          })}
        />
        <MoonIcon
          className={style.svg}
          style={assignInlineVars({
            [style.darkMode]: resolvedTheme === 'light' ? '-100px' : '0',
          })}
        />
      </button>
    </div>
  );
};

export default DarkModeBtn;
