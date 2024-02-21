import { style } from '@vanilla-extract/css';
import { global } from 'src/styles/globalTheme.css';

export const mainTitle = style({
  fontSize: global.fontSize.medium,
  fontWeight: global.fontWeight.large,
  marginBottom: global.margin.large,
});

export const subTitle = style({
  fontSize: global.fontSize.micro,
  marginBottom: global.margin.large,
});

export const mbtiItem = style({
  position: 'relative',
  width: '100%',
  height: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: `${global.margin.base} 0`,
  padding: `${global.padding.base} 0`,
  border: `2px solid ${global.color.pink}`,
  borderRadius: 4,
  boxShadow: global.shadow.base,
  ':hover': {
    transform: 'translateY(-4px)',
    transition: 'transform 0.1s linear',
  },
});

export const mbtiTypeText = style({
  fontWeight: global.fontWeight.medium,
});
