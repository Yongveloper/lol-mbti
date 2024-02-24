import { style } from '@vanilla-extract/css';
import { global, vars } from 'src/styles/globalTheme.css';

export const container = style({
  width: '100%',
  padding: `${global.padding.xLarge} ${global.padding.base}`,
  marginBottom: global.margin.xLarge,
  backgroundColor: vars.themeColor.color.contentBackground,
  boxShadow: global.shadow.base,
  border: `2px solid ${vars.themeColor.color.borderColor}`,
  color: vars.themeColor.color.mainFontColor,
  textAlign: 'center',
  transition: 'all 0.25s linear',
});
