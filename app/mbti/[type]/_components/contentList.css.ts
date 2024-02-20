import { style } from '@vanilla-extract/css';
import { global } from 'styles/globalTheme.css';

export const list = style({
  marginBottom: global.margin.base,
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: global.margin.base,
});
