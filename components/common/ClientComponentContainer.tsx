'use client';
import styled from 'styled-components';
import ThemeProvider from 'context/ThemeProvider';
import GlobalStyle from 'styles/GlobalStyle';
import Footer from 'components/common/Footer';
import DarkModeBtn from 'components/Buttons/DarkModeBtn';
import StyledComponentsRegistry from 'lib/registry';
import { size } from 'styles/theme';

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

interface IClientComponentContainerProps {
  children: React.ReactNode;
}

function ClientComponentContainer({
  children,
}: IClientComponentContainerProps) {
  return (
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
  );
}

export default ClientComponentContainer;
