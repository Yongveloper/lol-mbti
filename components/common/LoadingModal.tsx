import styled, { css, keyframes } from 'styled-components';
import Content from './Content';
import zed from 'public/images/zed.png';
import Image from 'next/image';

const rotateImage = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000;
  opacity: 0.5;
`;

const SContent = styled(Content)`
  position: absolute;
  max-width: 400px;
  height: 300px;
  width: 100%;

  img {
    animation: ${rotateImage} 1.5s linear infinite;
  }

  ${({ theme }) => theme.device.mobile} {
    h2 {
      font-size: ${({ theme }) => theme.font.size.regular};
    }
    width: 80%;
  }
`;

const Text = styled.h2`
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.weight.large};
      margin-bottom: ${theme.margin.large};
    `;
  }}
`;

const LoadingModal = () => {
  return (
    <Wrapper>
      <Overlay />
      <SContent>
        <Text>결과를 분석 중입니다...</Text>
        <Image src={zed} width={150} height={150} alt="zed" />
      </SContent>
    </Wrapper>
  );
};

export default LoadingModal;
