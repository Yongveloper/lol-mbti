import { style } from '@vanilla-extract/css';
import { global } from 'styles/globalTheme.css';

export const footer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const span = style({
  fontWeight: global.fontWeight.medium,
  fontSize: global.fontSize.micro,
  color: global.color.darkGray,
});
