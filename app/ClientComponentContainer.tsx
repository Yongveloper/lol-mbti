'use client';
import ThemeProvider from 'context/ThemeProvider';
import GlobalStyle from 'styles/GlobalStyle';
import Footer from 'components/common/Footer';
import DarkModeBtn from 'components/Buttons/DarkModeBtn';
import StyledComponentsRegistry from 'lib/registry';
import * as style from './layout.css';
interface IClientComponentContainerProps {
  children: React.ReactNode;
}

function ClientComponentContainer({
  children,
}: IClientComponentContainerProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <div className={style.container}>
          <GlobalStyle />
          <DarkModeBtn />
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default ClientComponentContainer;
