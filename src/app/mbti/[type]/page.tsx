import { Metadata, ResolvingMetadata } from 'next';
import types from 'src/data/result';
import * as style from './type.css';
import Content from './_components/Content';
import ContentList from './_components/ContentList';

export function generateStaticParams() {
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
  ].map((type) => ({
    type,
  }));

  return types;
}

type Props = {
  params: { type: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { type } = params;

  // fetch data
  const contents = types[type];
  const { position: positions, image } = contents;
  const position = positions[0];
  const subPosition = positions[1];

  return {
    title: `${type} : ${position}${subPosition}`,
    openGraph: {
      title: `${type} : ${position}${subPosition}`,
      images: [
        {
          url: `https://lol-mbti.vercel.app${image}`,
          width: 1200,
          height: 627,
          alt: '롤에서 알아보는 MBTI',
        },
      ],
    },
  };
}

const Page = ({ params }: { params: { type: string } }) => {
  const type = params.type;
  const contents = types[type];
  const { position: positions, image, content, note } = contents;
  const position = positions[0];
  const subPosition = positions[1];

  return (
    <main>
      <Content>
        <div className={style.content}>
          <div className={style.section}>
            {type}
            <h2>
              {position}
              <span className={style.positionText}>{subPosition}</span>
            </h2>
            <div
              style={{
                backgroundImage: `url(${image})`,
                width: '100px',
                height: '100px',
                backgroundSize: '100% auto',
              }}
              role="img"
            />
          </div>
          <div className={style.section}>
            <ContentList content={content} />
            <h3 className={style.boldText}>
              {type} {subPosition}이(가) 주의할 점:
            </h3>
            <p>{note}</p>
          </div>
          <div className={style.section}>
            <h3 className={style.boldText}>혹시 평소 MBTI와 다른가요?</h3>
            <p>
              롤을 할 때는 다른 인격이 나올 수 있어요!
              <br />
              결과의 라인대로 한번 플레이를 해보는 건 어떨까요!?
              <br />* 유형의 포지션은 추천 포지션입니다!
            </p>
          </div>
        </div>
      </Content>
    </main>
  );
};

export default Page;
