import { style } from '@vanilla-extract/css';
import { global } from 'styles/globalTheme.css';

export const container = style({
  width: '100%',
  maxWidth: global.device.mobile,
  minHeight: '100vh',
  margin: 'auto',
  padding: global.padding.base,
});
