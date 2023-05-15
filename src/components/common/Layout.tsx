import GlobalStyle from 'styles/GlobalStyle';
import styled from 'styled-components';
import { size } from 'styles/theme';
import Footer from './Footer';
import DarkModeBtn from '../Buttons/DarkModeBtn';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from 'utils/gtag';

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

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  }, []);

  return (
    <Wrapper>
      <GlobalStyle />
      <DarkModeBtn />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
