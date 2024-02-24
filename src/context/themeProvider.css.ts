import { style } from '@vanilla-extract/css';
import { vars } from 'src/styles/globalTheme.css';

export const container = style({
  backgroundColor: vars.themeColor.color.mainBackground,
  color: vars.themeColor.color.mainFontColor,
  transition: 'all 0.25s linear',
});
