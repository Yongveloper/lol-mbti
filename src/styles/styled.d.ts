import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    margin: {
      small: string;
      base: string;
      medium: string;
      large: string;
      xLarge: string;
    };

    padding: {
      small: string;
      base: string;
      large: string;
      xLarge: string;
    };

    shadow: {
      base: string;
    };

    color: {
      mainBackground: string;
      contentBackground: string;
      mainFontColor: string;
      borderColor: string;
      gradient: string;
      white: string;
      whiteYellow: string;
      yellow: string;
      whiteBlue: string;
      bluePuple: string;
      lightBlue: string;
      lightGray: string;
      whiteGray: string;
      darkGray: string;
      laime: string;
      lightRed: string;
      pink: string;
      red: string;
      black: string;
    };

    font: {
      size: {
        xLarge: string;
        large: string;
        medium: string;
        regular: string;
        small: string;
        micro: string;
      };
      weight: {
        normal: number;
        medium: number;
        large: number;
      };
    };

    device: {
      pc: string;
      tab: string;
      mobile: string;
      mobileS: string;
    };
  }
}
