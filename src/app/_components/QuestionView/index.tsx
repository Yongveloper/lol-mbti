import Content from 'src/app/_components/common/Content';
import { questions } from 'src/data/questions';
import PrevNextBtn from './PrevNextBtn';
import Progressbar from './Progressbar';
import LoadingModal from 'src/app/_components/QuestionView/LoadingModal';
import useQuestionnaire from 'src/hooks/useQuestionnaire';
import * as style from './questionView.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { global } from 'src/styles/globalTheme.css';

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
          <p className={style.questionText} key={text}>
            {text}
          </p>
        ))}
      </Content>
      {questions[currentQuestion].answers.map((answer, index) => (
        <button
          className={style.questionButton}
          style={assignInlineVars({
            [style.questionButtonFontColor]:
              answer.type === selected[currentQuestion]
                ? global.color.contentBackground
                : global.color.lightBlue,
            [style.questionButtonBackgroundColor]:
              answer.type === selected[currentQuestion]
                ? global.color.bluePurple
                : global.color.contentBackground,
          })}
          key={index}
          name={answer.type}
          onClick={onAnswerClick}
        >
          {answer.answer}
        </button>
      ))}
      {currentQuestion === questions.length - 1 && (
        <button
          className={style.resultButton}
          disabled={completed !== questions.length}
          onClick={onResultClick}
        >
          결과 보기!
        </button>
      )}
      {loading && <LoadingModal />}
    </>
  );
};

export default QuestionView;
