import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 1rem;
  margin: ${({ theme }) => theme.margin.base} 0;
  background-color: ${({ theme }) => theme.color.darkGray};
  border-radius: 8px;
  overflow: hidden;
`;

const Bar = styled.div<IProgressbarProps>`
  ${({ current }) => `width: calc(100 / 11 * ${current}%)`};
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightBlue};
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.15) 50%,
    transparent 25%
  );
  background-size: 1rem 1rem;
  animation: ${animation} 1s linear infinite;
  transition: width 0.5s ease;
`;

interface IProgressbarProps {
  current: number;
}

const Progressbar = ({ current }: IProgressbarProps) => {
  return (
    <Container>
      <Bar current={current} />
    </Container>
  );
};

export default Progressbar;
