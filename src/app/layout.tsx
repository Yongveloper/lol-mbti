import { Metadata } from 'next';
import ClientComponentContainer from 'src/app/_components/ClientComponentContainer';
import GoogleAnalytics from 'src/app/_lib/GoogleAnalytics';
import KakaoScript from 'src/app/_lib/KakaoScript';
import { Noto_Sans_KR } from 'next/font/google';
import 'src/styles/reset.css';
import 'src/styles/globalTheme.css';

declare global {
  interface Window {
    gtag: any;
    Kakao: any;
  }
}

export const notoSansKr = Noto_Sans_KR({
  display: 'swap',
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  robots: 'index, follow',
  title: '롤에서 알아보는 MBTI 유형 - 나에게 맞는 포지션은?',
  description:
    '나의 롤 MBTI를 알아보고 나에게 맞는 롤 MBTI 포지션까지 찾아보세요!',
  openGraph: {
    title: '롤에서 알아보는 MBTI 유형',
    description:
      '나의 롤 MBTI를 알아보고 나에게 맞는 롤 MBTI 포지션까지 찾아보세요!',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://lol-mbti.vercel.app',
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
  keywords:
    '롤 MBTI, 롤에서 알아보는 MBTI 유형, MBTI, 롤 포지션 찾기, 롤 MBTI, lol mbti, lol mbti 유형, 롤 MBTI 테스트, mbti 테스트, 롤 mbti 포지션, 롤 포지션 테스트',
  other: {
    'naver-site-verification': '34f935a8a20f82e88b62513a988146232cbd113c',
    'google-site-verification': 'CYaoNc6HqLsOSdLZsPQPSOUW2UTLv8D94DLu6H485HI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className}`}>
        <GoogleAnalytics />
        <ClientComponentContainer>{children}</ClientComponentContainer>
      </body>
      <KakaoScript />
    </html>
  );
}
