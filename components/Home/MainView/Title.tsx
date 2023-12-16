import styled, { css } from 'styled-components';
import Content from 'components/common/Content';

import Image from 'next/image';
import topIcon from 'public/images/position/top.png';
import jgIcon from 'public/images/position/jg.png';
import midIcon from 'public/images/position/mid.png';
import adIcon from 'public/images/position/ad.png';
import spIcon from 'public/images/position/sp.png';

type STextColor = {
  color: 'yellow' | 'bluePuple' | 'lightBlue' | 'laime' | 'red';
};

const MainTitle = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.xLarge};
      font-weight: ${theme.font.weight.large};
      margin-bottom: ${theme.margin.base};

      ${theme.device.mobileS} {
        font-size: ${theme.font.size.large};
      }
    `;
  }}
`;

const SubTitle = styled.h2`
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.regular};
      font-weight: ${theme.font.weight.medium};
      margin-bottom: ${theme.margin.base};

      ${theme.device.mobileS} {
        font-size: ${theme.font.size.small};
      }
    `;
  }}
`;

const TextColor = styled.span<STextColor>`
  ${({ theme, color }) => {
    return css`
      color: ${theme.color[color]};
    `;
  }}
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Title = () => {
  const images = [topIcon, jgIcon, midIcon, adIcon, spIcon];
  return (
    <Content>
      <MainTitle>
        <TextColor color="lightBlue">롤</TextColor>에서 알아보는
        <br />
        <TextColor color="red">M</TextColor>
        <TextColor color="yellow">B</TextColor>
        <TextColor color="laime">T</TextColor>
        <TextColor color="bluePuple">I</TextColor> 테스트
      </MainTitle>
      <SubTitle>
        롤에서 알아보는 MBTI 유형과
        <br />
        나에게 맞는 포지션은 어디일까?
      </SubTitle>
      <ImageContainer>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="position"
            width={50}
            height={50}
          />
        ))}
      </ImageContainer>
    </Content>
  );
};

export default Title;
