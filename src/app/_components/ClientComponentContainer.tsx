'use client';
import ThemeProvider from 'src/context/ThemeProvider';
import GlobalStyle from 'src/styles/GlobalStyle';
import Footer from 'src/app/_components/Footer';
import DarkModeBtn from 'src/app/_components/Buttons/DarkModeBtn';
import StyledComponentsRegistry from 'src/app/_lib/registry';
import * as style from '../layout.css';
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
