import { createVar, style } from '@vanilla-extract/css';
import { global, vars } from 'src/styles/globalTheme.css';

export const mainTitle = style({
  fontSize: global.fontSize.xLarge,
  fontWeight: global.fontWeight.large,
  marginBottom: global.margin.base,
  color: vars.themeColor.color.mainFontColor,

  '@media': {
    'screen and (max-width: 370px)': {
      fontSize: global.fontSize.large,
    },
  },
});

export const subTitle = style({
  fontSize: global.fontSize.regular,
  fontWeight: global.fontWeight.medium,
  marginBottom: global.margin.base,

  '@media': {
    'screen and (max-width: 370px)': {
      fontSize: global.fontSize.small,
    },
  },
});

export const textColorVar = createVar();

export const textColor = style({
  color: textColorVar,
});

export const imageContainer = style({
  width: '100%',
});
