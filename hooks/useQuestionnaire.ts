import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from 'data/questions';
import { getResult } from 'utils/getResult';

const useQuestionnaire = () => {
  const { push } = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const prevDisabled = currentQuestion === 0;
  const nextDisabled =
    completed === currentQuestion || currentQuestion === questions.length - 1;

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
    setTimeout(() => push(`/mbti/${mbtiType}`), 2500);
  };

  return {
    currentQuestion,
    completed,
    loading,
    selected,
    onAnswerClick,
    onPrevClick,
    onNextClick,
    onResultClick,
    prevDisabled,
    nextDisabled,
  };
};

export default useQuestionnaire;
