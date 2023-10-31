import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import styled from 'styled-components';

const StyledButton = styled.svg<{ disabled: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  transition: opacity 0.3s ease-in-out;
`;

const PrevNextBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface IPrevNextBtnProps {
  prevDisabled: boolean;
  nextDisabled: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const PrevNextBtn = ({
  prevDisabled,
  nextDisabled,
  onPrevClick,
  onNextClick,
}: IPrevNextBtnProps) => {
  return (
    <PrevNextBtnContainer>
      <StyledButton
        as={IoIosArrowDropleft}
        disabled={prevDisabled}
        onClick={onPrevClick}
      />
      <StyledButton
        as={IoIosArrowDropright}
        disabled={nextDisabled}
        onClick={onNextClick}
      />
    </PrevNextBtnContainer>
  );
};

export default PrevNextBtn;
