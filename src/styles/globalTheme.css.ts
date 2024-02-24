import {
  globalStyle,
  createThemeContract,
  createGlobalTheme,
  createTheme,
} from '@vanilla-extract/css';

export const global = createGlobalTheme(':root', {
  fontFamily: {
    notoSansKR: `var(--font-noto-sans-kr)`,
  },
  fontSize: {
    xLarge: '48px',
    large: '36px',
    medium: '28px',
    regular: '18px',
    small: '16px',
    micro: '14px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    large: '700',
  },
  device: {
    pc: '1200px',
    tab: '900px',
    mobile: '480px',
    mobileS: '370px',
  },
  margin: {
    small: '.5rem',
    base: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xLarge: '3rem',
  },
  padding: {
    small: '.5rem',
    base: '1rem',
    large: '2rem',
    xLarge: '3rem',
  },
  shadow: {
    base: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
  },
  color: {
    white: '#ffffff',
    whiteYellow: '#f7e7b4',
    yellow: '#f9d462',
    whiteBlue: '#c7c5f8',
    bluePurple: '#5e17eb',
    lightBlue: '#6558f5',
    lightGray: '#f7f9fa',
    whiteGray: '#cbc9f9',
    darkGray: '#7A7F82',
    laime: '#28C90C',
    lightRed: '#d65267',
    pink: '#ecc3ca',
    red: '#ff1616',
    black: '#3a3939',
    mainBackground: '#f7f9fa',
    contentBackground: '#ffffff',
    mainFontColor: '#2c2c2c',
    borderColor: '#cbc9f9',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
});

export const themeColor = createThemeContract({
  color: {
    mainBackground: null,
    contentBackground: null,
    mainFontColor: null,
    borderColor: null,
    gradient: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#f7f9fa',
    contentBackground: '#ffffff',
    mainFontColor: '#2c2c2c',
    borderColor: '#cbc9f9',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#1d1d1d',
    contentBackground: '#2c2c2c',
    mainFontColor: '#ffffff',
    borderColor: '#b1b1b3',
    gradient: 'linear-gradient(#091236, #1E215D)',
  },
});

export const vars = { ...global, themeColor };

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  fontSize: global.fontSize.small,
  userSelect: 'none',
  transition: 'all 0.25s linear',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});
