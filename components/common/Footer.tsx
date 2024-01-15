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

const ADWrapper = styled.div<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

const Footer = () => {
  return (
    <Wrapper>
      <ADWrapper $width="320px" $height="100px">
        <KakaoAdfit width="320" height="100" unit="DAN-6X6csqaRgRsz1LqA" />
      </ADWrapper>
      <ADWrapper $width="300px" $height="250px">
        <KakaoAdfit width="300" height="250" unit="DAN-kNNgmAXByO4ajNL6" />
      </ADWrapper>
      <span>Contact: yongyong5766@gmail.com</span>
      <span>© yongyong Co. all rights reserved.</span>
    </Wrapper>
  );
};

export default Footer;
