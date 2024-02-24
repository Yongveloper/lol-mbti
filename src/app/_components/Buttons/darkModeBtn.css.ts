import { createVar, style } from '@vanilla-extract/css';
import { global, vars } from 'src/styles/globalTheme.css';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: global.margin.base,
});

export const button = style({
  width: '80px',
  height: '30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  padding: global.padding.small,
  background: vars.themeColor.color.gradient,
  border: `2px solid ${global.color.borderColor}`,
  borderRadius: '30px',
  cursor: 'pointer',
});

export const lightMode = createVar();
export const darkMode = createVar();

export const svg = style({
  width: '1.5rem',
  height: 'auto',
  transition: 'all 0.25s linear',

  selectors: {
    '&:first-child': {
      transform: `translateY(${lightMode})`,
    },
    '&:nth-child(2)': {
      transform: `translateY(${darkMode})`,
    },
  },
});
