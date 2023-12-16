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
      <span>Contact: yongyong5766@gmail.com</span>
      <span>© yongyong Co. all rights reserved.</span>
    </Wrapper>
  );
};

export default Footer;
