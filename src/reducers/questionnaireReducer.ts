import { questions } from 'src/data/questions';

interface IState {
  currentQuestion: number;
  completed: number;
  loading: boolean;
  selected: string[];
}

export const QUESTIONNAIRE_ACTIONS = {
  ANSWER: 'answer',
  PREV: 'prev',
  NEXT: 'next',
} as const;

type QuestionnaireActionType =
  (typeof QUESTIONNAIRE_ACTIONS)[keyof typeof QUESTIONNAIRE_ACTIONS];

interface IAction {
  type: QuestionnaireActionType;
  answer?: string;
}

export const initialState: IState = {
  currentQuestion: 0,
  completed: 0,
  loading: false,
  selected: [],
};

export const questionnaireReducer = (
  state: IState,
  action: IAction
): IState => {
  switch (action.type) {
    case QUESTIONNAIRE_ACTIONS.ANSWER:
      // 사용자가 답변을 선택했을 때의 상태 업데이트 로직
      if (!action.answer) {
        return state;
      }

      const newSelected = [...state.selected];
      newSelected[state.currentQuestion] = action.answer;

      const newState = {
        ...state,
        selected: newSelected,
      };

      if (state.currentQuestion < questions.length - 1) {
        newState.currentQuestion++;
      }

      if (
        state.currentQuestion === state.completed &&
        state.currentQuestion <= questions.length - 1
      ) {
        newState.completed++;
      }

      return newState;
    case QUESTIONNAIRE_ACTIONS.PREV:
      // 사용자가 이전 버튼을 클릭했을 때의 상태 업데이트 로직
      if (state.currentQuestion === 0) {
        return state;
      }
      return { ...state, currentQuestion: state.currentQuestion - 1 };
    case QUESTIONNAIRE_ACTIONS.NEXT:
      // 사용자가 다음 버튼을 클릭했을 때의 상태 업데이트 로직
      if (
        state.completed === state.currentQuestion ||
        state.currentQuestion === questions.length - 1
      ) {
        return state;
      }
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    default:
      return state;
  }
};
