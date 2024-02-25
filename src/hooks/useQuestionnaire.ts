import { useReducer, useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from 'src/data/questions';
import { getResult } from 'src/utils/getResult';
import {
  QUESTIONNAIRE_ACTIONS,
  initialState,
  questionnaireReducer,
} from 'src/reducers/questionnaireReducer';

const useQuestionnaire = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(questionnaireReducer, initialState);
  const { currentQuestion, completed, selected } = state;
  const prevDisabled = currentQuestion === 0;
  const nextDisabled =
    completed === currentQuestion || currentQuestion === questions.length - 1;

  const onAnswerClick = (event: React.MouseEvent<HTMLElement>) => {
    const MBTIType = event.currentTarget.getAttribute('name');
    if (MBTIType) {
      dispatch({ type: QUESTIONNAIRE_ACTIONS.ANSWER, answer: MBTIType });
    }
  };

  const onPrevClick = () => {
    dispatch({ type: QUESTIONNAIRE_ACTIONS.PREV });
  };

  const onNextClick = () => {
    dispatch({ type: QUESTIONNAIRE_ACTIONS.NEXT });
  };

  const pushToMBTIType = () => {
    const MBTIType = getResult(selected);
    setTimeout(() => push(`/mbti/${MBTIType}`), 2500);
  };

  const onResultClick = () => {
    if (completed === questions.length) {
      setLoading(true);
      pushToMBTIType();
    }
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
