'use client';
import { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import ThemeProvider from 'context/ThemeProvider';
import GlobalStyle from 'styles/GlobalStyle';
import { size } from 'styles/theme';
import Footer from 'components/common/Footer';
import DarkModeBtn from 'components/Buttons/DarkModeBtn';
import { GA_TRACKING_ID } from 'utils/gtag';
import GoogleAnalytics from 'components/GoogleAnalytics';
import StyledComponentsRegistry from 'lib/registry';

declare global {
  interface Window {
    Kakao: any;
    gtag: any;
  }
}

const Wrapper = styled.div`
  width: 100%;
  max-width: ${size.mobile};
  min-height: 100vh;
  margin: auto;
  padding: ${({ theme }) => theme.padding.base};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { events } = useRouter();

  // useEffect(() => {
  //   if (process.env.NODE_ENV === 'production') {
  //     const handleRouteChange = (url: URL) => {
  //       gtag.pageview(url);
  //     };
  //     events.on('routeChangeComplete', handleRouteChange);
  //     events.on('hashChangeComplete', handleRouteChange);
  //     return () => {
  //       events.off('routeChangeComplete', handleRouteChange);
  //       events.off('hashChangeComplete', handleRouteChange);
  //     };
  //   }
  // }, [events]);

  // useEffect(() => {
  //   window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  // }, []);

  return (
    <html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="CYaoNc6HqLsOSdLZsPQPSOUW2UTLv8D94DLu6H485HI"
        />
        <meta name="robots" content="ALL" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="yongyong" />
        <meta name="reply-to" content="yongyong5766@gmail.com" />
        <meta name="content-language" content="kr" />
        <meta
          name="description"
          content="나의 롤 MBTI를 알아보고 나에게 맞는 롤 MBTI 포지션까지 찾아보세요!"
        />
        <meta
          name="keywords"
          content="롤 MBTI, 롤에서 알아보는 MBTI 유형, MBTI, 롤 포지션 찾기, 롤 MBTI, lol mbti, lol mbti 유형, 롤 MBTI 테스트, mbti 테스트, 롤 mbti 포지션, 롤 포지션 테스트"
        />
        <meta
          property="og:description"
          content="나의 롤 MBTI를 알아보고 나에게 맞는 롤 MBTI 포지션까지 찾아보세요!"
        />
        <meta property="og:site_name" content="롤에서 알아보는 MBTI 유형" />
        <meta
          name="naver-site-verification"
          content="34f935a8a20f82e88b62513a988146232cbd113c"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5623149944196012"
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
      </Head>
      <body>
        <GoogleAnalytics ga_id={GA_TRACKING_ID} />
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Wrapper>
              <GlobalStyle />
              <DarkModeBtn />
              {children}
              <Footer />
            </Wrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
