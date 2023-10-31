import { useState } from 'react';
import Button from 'src/components/common/Button';
import Content from 'src/components/common/Content';
import { questions } from 'src/data/questions';
import styled, { css } from 'styled-components';
import PrevNextBtn from './PrevNextBtn';
import Progressbar from './Progressbar';
import LoadingModal from 'src/components/common/LoadingModal';
import { useRouter } from 'next/router';

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
interface MbtiType {
  [key: string]: number;
}

const getResult = (selected: string[]): string => {
  const mbti: MbtiType = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };
  const mbtiTypes = Object.keys(mbti);

  selected.forEach((type) => {
    const selectedType = type[0];
    mbti[selectedType]++;
  });

  const result = mbtiTypes.filter((type) => mbti[type] >= 2).join('');

  return result;
};

const QuestionView = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const prevDisabled = currentQuestion === 0;
  const nextDisabled =
    completed === currentQuestion || currentQuestion === questions.length - 1; // 응답 완료한 개수와 현재 진행중인 질문이 같거나, 현재 진행중인 질문이 마지막 질문일 경우

  const onAnswerClick = (event: React.MouseEvent<HTMLElement>) => {
    const type = event.currentTarget.getAttribute('name');
    if (!type) {
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }

    if (
      currentQuestion === completed &&
      currentQuestion <= questions.length - 1
    ) {
      setCompleted((prev) => prev + 1);
    }

    const selectedArray = [...selected];
    selectedArray[currentQuestion] = type;
    setSelected(selectedArray);
  };

  const onPrevClick = () => {
    if (!prevDisabled) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const onNextClick = () => {
    if (!nextDisabled) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const onResultClick = () => {
    if (completed !== questions.length) return;
    setLoading(true);
    pushToMbtiType();
  };

  const pushToMbtiType = () => {
    const mbtiType = getResult(selected);
    setTimeout(() => router.push(`/mbti/${mbtiType}`), 2500);
  };

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
              ? 'bluePuple'
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
