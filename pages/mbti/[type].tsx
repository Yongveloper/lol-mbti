import { useRef } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import Content from 'src/components/common/Content';
import types from 'src/data/result';
import ContentList from 'src/components/Mbti/ContentList';
import KakaoBtn from 'src/components/Buttons/KakaoBtn';
import CopyBtn from 'src/components/Buttons/CopyBtn';
import ReplayBtn from 'src/components/Buttons/ReplayBtn';
import AllTypeBtn from 'src/components/Buttons/AllTypeBtn';
import SaveImageBtn from 'src/components/Buttons/SaveImageBtn';

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

interface IProps {
  type: string;
}

const Type = ({ type }: IProps) => {
  const contents = types[type];
  const { position: positions, image, content, note } = contents;
  const position = positions[0];
  const positionSub = positions[1];
  const resultRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>{`${type} : ${position}${positionSub}`}</title>
        <meta
          property="og:title"
          content={`${type} : ${position}${positionSub}`}
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
        <div id="content" ref={resultRef}>
          <SContent>
            <Div>
              {type}
              <h2>
                {position}
                <PositionText>{positionSub}</PositionText>
              </h2>
              <Image src={image} width={100} height={100} alt="position" />
            </Div>
            <Div>
              <ContentList content={content} />
              <BoldText>
                {type} {positionSub}이(가) 주의할 점:
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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const type = context.params?.type;
  return {
    props: {
      type,
    },
  };
};

export const getStaticPaths = async () => {
  const types = [
    'ISTJ',
    'ISFJ',
    'ISTP',
    'ISFP',
    'ESTP',
    'ESFP',
    'ESTJ',
    'ESFJ',
    'INFJ',
    'INTJ',
    'INFP',
    'INTP',
    'ENFP',
    'ENTP',
    'ENFJ',
    'ENTJ',
  ];
  const paths = types.map((type) => ({
    params: { type },
  }));
  return {
    paths,
    fallback: false,
  };
};
