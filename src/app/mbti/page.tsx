import { Metadata } from 'next';
import Content from 'src/app/_components/common/Content';
import Link from 'next/link';
import types from 'src/data/result';
import ReplayBtn from 'src/app/_components/Buttons/ReplayBtn';
import KakaoBtn from 'src/app/_components/Buttons/KakaoBtn';
import CopyBtn from 'src/app/_components/Buttons/CopyBtn';
import * as style from './mbti.css';

export const metadata: Metadata = {
  robots: 'index, follow',
  title: '롤 MBTI 포지션 모든 유형',
  openGraph: {
    title: '롤 MBTI 유형을 한눈에 확인해보세요! - 롤에서 알아보는 MBTI 유형',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://lol-mbti.vercel.app/mbti',
    siteName: '롤에서 알아보는 MBTI 유형',
    images: [
      {
        url: 'https://lol-mbti.vercel.app/images/logo.png',
        width: 1200,
        height: 627,
        alt: '롤에서 알아보는 MBTI',
      },
    ],
  },
};

const Page = () => {
  const mbtiTypes = Object.keys(types);
  return (
    <>
      <Content>
        <h1 className={style.mainTitle}>모든 유형과 포지션</h1>
        <h2 className={style.subTitle}>
          모든 유형과 추천 포지션을 한 눈에 확인해보세요!
        </h2>
        {mbtiTypes.map((type, index) => (
          <ul key={index}>
            <Link href={`/mbti/${type}`}>
              <li className={style.mbtiItem}>
                <span className={style.mbtiTypeText}>{type}</span>{' '}
                {types[type].position}
              </li>
            </Link>
          </ul>
        ))}
      </Content>
      <ReplayBtn />
      <KakaoBtn />
      <CopyBtn />
    </>
  );
};

export default Page;
