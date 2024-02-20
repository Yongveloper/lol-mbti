import { keyframes, style } from '@vanilla-extract/css';
import { global } from 'styles/globalTheme.css';

const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1,
  backdropFilter: 'blur(2px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const overlay = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#000000',
  opacity: 0.5,
});

export const content = style({
  width: '100%',
  position: 'absolute',
  maxWidth: '400px',
  height: '300px',
  padding: `${global.padding.xLarge} ${global.padding.base}`,
  marginBottom: global.margin.xLarge,
  backgroundColor: global.color.contentBackground,
  boxShadow: global.shadow.base,
  border: `2px solid ${global.color.borderColor}`,
  textAlign: 'center',

  '@media': {
    'screen and (min-width: 480px)': {
      width: '80%',
    },
  },
});

export const image = style({
  animation: `${rotate} 1.5s linear infinite`,
});

export const text = style({
  fontSize: global.fontSize.medium,
  fontWeight: global.fontWeight.large,
  marginBottom: global.margin.large,
  '@media': {
    'screen and (min-width: 480px)': {
      fontSize: global.fontSize.regular,
    },
  },
});
