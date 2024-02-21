import { Noto_Sans_KR } from 'next/font/google';
import * as styled from 'styled-components';
import reset from 'styled-reset';

export const notoSansKr = Noto_Sans_KR({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

const GlobalStyle = styled.createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  ${({ theme }) => {
    return styled.css`
      body {
        background-color: ${theme.color.mainBackground};
        font-family: ${notoSansKr.style.fontFamily};
        font-size: ${theme.font.size.small};
        color: ${theme.color.mainFontColor};
        user-select: none;
        transition: all 0.25s linear;
      }
    `;
  }}

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
