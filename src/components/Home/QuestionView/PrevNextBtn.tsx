import { useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import styled from 'styled-components';

const PrevNextBtnContainer = styled.div<{
  prevDisabled: boolean;
  nextDisabled: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:first-child {
      opacity: ${({ prevDisabled }) => prevDisabled && 0.3};
      cursor: ${({ prevDisabled }) => prevDisabled && 'not-allowed'};
    }
    &:nth-child(2) {
      opacity: ${({ nextDisabled }) => nextDisabled && 0.3};
      cursor: ${({ nextDisabled }) => nextDisabled && 'not-allowed'};
    }
  }
`;

interface IPrevNextBtnProps {
  completed: number;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}

type ButtonType = 'prev' | 'next';

const PrevNextBtn = ({
  completed,
  currentQuestion,
  setCurrentQuestion,
}: IPrevNextBtnProps) => {
  const prevDisabled = currentQuestion === 0;
  const nextDisabled = completed === currentQuestion || currentQuestion === 11;

  const onClick = (type: ButtonType) => {
    if (type === 'prev' && !prevDisabled) {
      setCurrentQuestion((prev) => prev - 1);
    } else if (type === 'next' && !nextDisabled) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <PrevNextBtnContainer
      prevDisabled={prevDisabled}
      nextDisabled={nextDisabled}
    >
      <IoIosArrowDropleft onClick={() => onClick('prev')} />
      <IoIosArrowDropright onClick={() => onClick('next')} />
    </PrevNextBtnContainer>
  );
};

export default PrevNextBtn;
