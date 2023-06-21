import styled, { css } from 'styled-components';
import KakaoAdfit from './KakaoAdfit';

const Wrapper = styled.footer`
  ${({ theme }) => {
    return css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & span {
        font-weight: ${theme.font.weight.medium};
        font-size: ${theme.font.size.micro};
        color: ${theme.color.darkGray};
        &:not(:last-child) {
          margin-bottom: ${theme.margin.small};
        }
      }
    `;
  }}
`;

const Footer = () => {
  return (
    <Wrapper>
      <KakaoAdfit width="320" height="100" unit="DAN-6X6csqaRgRsz1LqA" />
      <KakaoAdfit width="300" height="250" unit="DAN-kNNgmAXByO4ajNL6" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5623149944196012"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5623149944196012"
        data-ad-slot="1440915776"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <span>Contact: yongyong5766@gmail.com</span>
      <span>© yongyong Co. all rights reserved.</span>
    </Wrapper>
  );
};

export default Footer;
