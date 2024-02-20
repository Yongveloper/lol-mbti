import { style, createVar } from '@vanilla-extract/css';
import { global } from 'styles/globalTheme.css';

export const backgroundColor = createVar();
export const fontColor = createVar();
export const borderColor = createVar();

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: `${global.padding.small} ${global.padding.base}`,
  marginBottom: global.margin.medium,
  border: '2px solid black',
  borderColor,
  borderRadius: 4,
  color: fontColor,
  fontSize: global.fontSize.small,
  fontFamily: global.fontFamily.notoSansKR,
  backgroundColor,
  cursor: 'pointer',
});
