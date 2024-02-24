import { style } from '@vanilla-extract/css';
import { global, vars } from 'src/styles/globalTheme.css';

export const content = style({
  width: '100%',
  padding: `${global.padding.small} ${global.padding.base}`,
  marginBottom: global.margin.xLarge,
  backgroundColor: vars.themeColor.color.contentBackground,
  boxShadow: global.shadow.base,
  border: `2px solid ${global.color.borderColor}`,
  textAlign: 'center',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${global.padding.base} 0`,
  lineHeight: 1.5,
  borderBottom: `3px solid ${global.color.borderColor}`,
});

export const lastSection = style([
  section,
  {
    borderBottom: 'none',
  },
]);

export const positionText = style({
  marginLeft: global.margin.small,
  fontSize: global.fontSize.medium,
  fontWeight: global.fontWeight.large,
});

export const boldText = style({
  marginBottom: global.margin.base,
  fontWeight: global.fontWeight.large,
});
