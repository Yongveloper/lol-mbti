import { useState } from 'react';
import Button from 'src/components/common/Button';
import Content from 'src/components/common/Content';
import { questions } from 'src/data/questions';
import styled, { css } from 'styled-components';
import PrevNextBtn from './PrevNextBtn';
import Progressbar from './Progressbar';
import LoadingModal from 'src/components/common/LoadingModal';
import { useRouter } from 'next/router';

const QestionText = styled.p`
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
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const onAnswerClick = (event: React.MouseEvent<HTMLElement>) => {
    checkProgressAndCompletedQuestion();
    const type = event.currentTarget.getAttribute('name');
    SelectAnAnswer(type);
  };

  const checkProgressAndCompletedQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
    if (
      currentQuestion === completed &&
      currentQuestion <= questions.length - 1
    ) {
      setCompleted((prev) => prev + 1);
    }
  };

  const SelectAnAnswer = (type: string | null) => {
    if (type) {
      const selectedArray = [...selected];
      selectedArray[currentQuestion] = type;
      setSelected(selectedArray);
    }
  };

  const onResultClick = () => {
    if (completed !== questions.length) return;
    setLoading(true);
    pushToMbtiType();
  };

  const pushToMbtiType = () => {
    const mbtiType = getResult();
    setTimeout(() => router.push(`/mbti/${mbtiType}`), 2500);
  };

  const getResult = (): string => {
    type MbtiType = {
      [key: string]: number;
    };
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

  return (
    <>
      <PrevNextBtn
        completed={completed}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      <Progressbar current={currentQuestion} />
      <Content>
        {questions[currentQuestion].question.split('\n').map((text) => (
          <QestionText key={text}>{text}</QestionText>
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
