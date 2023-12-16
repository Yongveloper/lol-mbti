'use client';
import { useRef } from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';
import Content from 'components/common/Content';
import types from 'data/result';
import ContentList from 'components/Mbti/ContentList';
import KakaoBtn from 'components/Buttons/KakaoBtn';
import CopyBtn from 'components/Buttons/CopyBtn';
import ReplayBtn from 'components/Buttons/ReplayBtn';
import AllTypeBtn from 'components/Buttons/AllTypeBtn';
import SaveImageBtn from 'components/Buttons/SaveImageBtn';

const SContent = styled(Content)`
  ${({ theme }) => {
    return css`
      padding: ${theme.padding.small} ${theme.padding.base};
    `;
  }}
`;

const Div = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: ${theme.padding.base} 0;
      line-height: 1.5;
      :not(:last-child) {
        border-bottom: 3px solid ${theme.color.borderColor};
      }

      p {
        :not(:last-child) {
          margin-bottom: ${theme.margin.base};
        }
      }
    `;
  }}
`;

const PositionImg = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: 100% auto;
  width: 100px;
  height: 100px;
`;

const PositionText = styled.span`
  ${({ theme }) => {
    return css`
      margin-left: ${theme.margin.small};
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.weight.large};
    `;
  }}
`;

const BoldText = styled.h3`
  ${({ theme }) => {
    return css`
      margin-bottom: ${theme.margin.base};
      font-weight: ${theme.font.weight.large};
    `;
  }}
`;

interface ITypeProps {
  type: string;
}

const Type = ({ type }: any) => {
  //   console.log(params);

  //   const { type } = params;

  const contents = types[type];
  const { position: positions, image, content, note } = contents;
  const position = positions[0];
  const subPosition = positions[1];
  const resultRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>{`${type} : ${position}${subPosition}`}</title>
        <meta
          property="og:title"
          content={`${type} : ${position}${subPosition}`}
        />
        <meta
          property="og:image"
          content={`https://lol-mbti.vercel.app${image}`}
        />
        <meta property="og:image:alt" content="롤에서 알아보는 MBTI" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <link rel="canonical" href="https://lol-mbti.vercel.app/mbti" />
      </Head>
      <main>
        <div ref={resultRef}>
          <SContent>
            <Div>
              {type}
              <h2>
                {position}
                <PositionText>{subPosition}</PositionText>
              </h2>
              <PositionImg src={image} role="img" />
            </Div>
            <Div>
              <ContentList content={content} />
              <BoldText>
                {type} {subPosition}이(가) 주의할 점:
              </BoldText>
              <p>{note}</p>
            </Div>
            <Div>
              <BoldText>혹시 평소 MBTI와 다른가요?</BoldText>
              <p>
                롤을 할 때는 다른 인격이 나올 수 있어요!
                <br />
                결과의 라인대로 한번 플레이를 해보는 건 어떨까요!?
                <br />* 유형의 포지션은 추천 포지션입니다!
              </p>
            </Div>
          </SContent>
        </div>
        <ReplayBtn />
        <SaveImageBtn divRef={resultRef} />
        <KakaoBtn />
        <CopyBtn />
        <AllTypeBtn />
      </main>
    </>
  );
};

export default Type;
