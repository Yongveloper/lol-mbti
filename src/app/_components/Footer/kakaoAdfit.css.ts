import { createVar, style } from '@vanilla-extract/css';
import { global } from 'src/styles/globalTheme.css';

export const width = createVar();
export const height = createVar();

export const container = style({
  width,
  height,
  marginBottom: global.margin.base,
});
