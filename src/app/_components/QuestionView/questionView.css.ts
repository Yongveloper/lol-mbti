import { createVar, style } from '@vanilla-extract/css';
import { global } from 'src/styles/globalTheme.css';

export const questionText = style({
  fontSize: global.fontSize.regular,
  lineHeight: 1.5,
});

export const questionButtonFontColor = createVar();
export const questionButtonBackgroundColor = createVar();

const buttonStyles = style({
  width: '100%',
  padding: `${global.padding.small} ${global.padding.base}`,
  marginBottom: global.margin.medium,
  borderRadius: 4,
  fontSize: global.fontSize.small,
  fontFamily: global.fontFamily.notoSansKR,
  cursor: 'pointer',
});

export const questionButton = style([
  buttonStyles,
  {
    border: `2px solid ${global.color.borderColor}`,
    color: questionButtonFontColor,
    backgroundColor: questionButtonBackgroundColor,
    ':hover': {
      color: global.color.white,
      backgroundColor: global.color.bluePurple,
      transition: 'background-color 0.1s linear',
    },
  },
]);

export const resultButton = style([
  buttonStyles,
  {
    border: 'none',
    marginTop: global.margin.xLarge,
    backgroundColor: global.color.bluePurple,
    color: global.color.white,
    transition: 'background-color 0.1s ease-in-out',
    ':disabled': {
      backgroundColor: global.color.darkGray,
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
]);
