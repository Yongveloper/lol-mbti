'use client';

import Content from 'components/common/Content';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import types from 'data/result';
import ReplayBtn from 'components/Buttons/ReplayBtn';
import KakaoBtn from 'components/Buttons/KakaoBtn';
import CopyBtn from 'components/Buttons/CopyBtn';

const Ul = styled.ul``;

const H1 = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.weight.large};
      margin-bottom: ${theme.margin.large};
    `;
  }}
`;

const H2 = styled.h2`
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.micro};
      margin-bottom: ${theme.margin.large};
    `;
  }}
`;

const Li = styled.li`
  ${({ theme }) => {
    return css`
      position: relative;
      width: 100%;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: ${theme.margin.base} 0;
      padding: ${theme.padding.base} 0;
      border: 2px solid ${theme.color.pink};
      border-radius: 4px;
      box-shadow: ${theme.shadow.base};
      :hover {
        transform: translateY(-4px);
        transition: transform 0.1s linear;
      }
    `;
  }}
`;

const BoldText = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const Mbti = () => {
  const mbtiTypes = Object.keys(types);
  return (
    <>
      <Content>
        <H1>모든 유형과 포지션</H1>
        <H2>모든 유형과 추천 포지션을 한 눈에 확인해보세요!</H2>
        {mbtiTypes.map((type, index) => (
          <Ul key={index}>
            <Link href={`/mbti/${type}`}>
              <Li>
                <BoldText>{type}</BoldText> {types[type].position}
              </Li>
            </Link>
          </Ul>
        ))}
      </Content>
      <ReplayBtn />
      <KakaoBtn />
      <CopyBtn />
    </>
  );
};

export default Mbti;
