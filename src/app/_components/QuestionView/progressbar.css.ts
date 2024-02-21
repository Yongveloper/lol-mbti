import { style, keyframes, createVar } from '@vanilla-extract/css';
import { global } from 'src/styles/globalTheme.css';

const rotate = keyframes({
  '0%': {
    backgroundPosition: `1rem 0`,
  },
  '100%': {
    backgroundPosition: `0 0`,
  },
});

export const container = style({
  width: '100%',
  height: '1rem',
  margin: `${global.margin.base} 0`,
  backgroundColor: global.color.darkGray,
  borderRadius: 8,
  overflow: 'hidden',
});

export const widthVar = createVar();

export const bar = style({
  width: widthVar,
  height: '100%',
  backgroundColor: global.color.lightBlue,
  backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.15) 50%, transparent 25%)`,
  backgroundSize: `1rem 1rem`,
  animation: `${rotate} 1s linear infinite`,
  transition: `width 0.5s ease`,
});
