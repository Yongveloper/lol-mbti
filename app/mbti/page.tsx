import { Metadata } from 'next';
import Mbti from 'components/Mbti/Mbti';

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
  return <Mbti />;
};

export default Page;
