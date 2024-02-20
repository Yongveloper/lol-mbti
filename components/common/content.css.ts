import { style } from '@vanilla-extract/css';
import { global } from 'styles/globalTheme.css';

export const container = style({
  width: '100%',
  padding: `${global.padding.xLarge} ${global.padding.base}`,
  marginBottom: global.margin.xLarge,
  backgroundColor: global.color.contentBackground,
  boxShadow: global.shadow.base,
  border: `2px solid ${global.color.borderColor}`,
  textAlign: 'center',
});
