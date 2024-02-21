export const size = {
  pc: '1200px',
  tab: '900px',
  mobile: '480px',
  mobileS: '370px',
};

const margin = {
  small: '.5rem',
  base: '1rem',
  medium: '1.5rem',
  large: '2rem',
  xLarge: '3rem',
};

const padding = {
  small: '.5rem',
  base: '1rem',
  large: '2rem',
  xLarge: '3rem',
};

const shadow = {
  base: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
};

const color = {
  white: '#ffffff',
  whiteYellow: '#f7e7b4',
  yellow: '#f9d462',
  whiteBlue: '#c7c5f8',
  bluePuple: '#5e17eb',
  lightBlue: '#6558f5',
  lightGray: '#f7f9fa',
  whiteGray: '#cbc9f9',
  darkGray: '#7A7F82',
  laime: '#28C90C',
  lightRed: '#d65267',
  pink: '#ecc3ca',
  red: '#ff1616',
  black: '#3a3939',
};

const font = {
  size: {
    xLarge: '48px',
    large: '36px',
    medium: '28px',
    regular: '18px',
    small: '16px',
    micro: '14px',
  },
  weight: {
    normal: 400,
    medium: 500,
    large: 700,
  },
};

const device = {
  pc: `@media screen and (max-width: ${size.pc})`,
  tab: `@media screen and (max-width: ${size.tab})`,
  mobile: `@media screen and (max-width: ${size.mobile})`,
  mobileS: `@media screen and (max-width: ${size.mobileS})`,
};

const lightThemeColors = {
  mainBackground: '#f7f9fa',
  contentBackground: '#ffffff',
  mainFontColor: '#2c2c2c',
  borderColor: '#cbc9f9',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  ...color,
};

const darkThemeColors = {
  mainBackground: '#1d1d1d',
  contentBackground: '#2c2c2c',
  mainFontColor: '#ffffff',
  borderColor: '#b1b1b3',
  gradient: 'linear-gradient(#091236, #1E215D)',
  ...color,
};

const defaultTheme = {
  margin,
  padding,
  shadow,
  font,
  device,
};

export const lightTheme = {
  ...defaultTheme,
  color: lightThemeColors,
};

export const darkTheme = {
  ...defaultTheme,
  color: darkThemeColors,
};
