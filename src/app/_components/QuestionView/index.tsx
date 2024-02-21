import Button from 'src/app/_components/common/Button';
import Content from 'src/app/_components/common/Content';
import { questions } from 'src/data/questions';
import styled, { css } from 'styled-components';
import PrevNextBtn from './PrevNextBtn';
import Progressbar from './Progressbar';
import LoadingModal from 'src/app/_components/QuestionView/LoadingModal';
import useQuestionnaire from 'src/hooks/useQuestionnaire';

const QuestionText = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.regular};
  line-height: 1.5;
`;

const SButton = styled(Button)`
  ${({ theme }) => {
    return css`
      :hover {
        border-color: ${theme.color.bluePuple};
        transition: border-color 0.1s linear;
      }
    `;
  }}
`;

const ResultButton = styled(Button)<{ completed: boolean }>`
  opacity: ${({ completed }) => (completed ? 1 : 0.5)};
  cursor: ${({ completed }) => !completed && 'not-allowed'};
  transition: opacity 0.1s ease-in-out;
`;

const QuestionView = () => {
  const {
    currentQuestion,
    onAnswerClick,
    selected,
    completed,
    onResultClick,
    loading,
    prevDisabled,
    nextDisabled,
    onPrevClick,
    onNextClick,
  } = useQuestionnaire();

  return (
    <>
      <PrevNextBtn
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
      <Progressbar current={currentQuestion} />
      <Content>
        {questions[currentQuestion].question.split('\n').map((text) => (
          <QuestionText key={text}>{text}</QuestionText>
        ))}
      </Content>
      {questions[currentQuestion].answers.map((answer, index) => (
        <SButton
          key={index}
          name={answer.type}
          onClick={onAnswerClick}
          fontColor={
            answer.type === selected[currentQuestion] ? 'white' : 'lightBlue'
          }
          bgColor={
            answer.type === selected[currentQuestion]
              ? 'bluePurple'
              : 'contentBackground'
          }
        >
          {answer.answer}
        </SButton>
      ))}
      {currentQuestion === questions.length - 1 && (
        <ResultButton
          bgColor="lightBlue"
          fontColor="white"
          borderColor="lightBlue"
          completed={completed === questions.length}
          onClick={onResultClick}
        >
          결과 보기!
        </ResultButton>
      )}
      {loading && <LoadingModal />}
    </>
  );
};

export default QuestionView;
