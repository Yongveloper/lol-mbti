import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import * as style from './prevNextBtn.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

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
    <div className={style.container}>
      <IoIosArrowDropleft
        className={style.icon}
        style={assignInlineVars({
          [style.cursorVar]: prevDisabled ? 'not-allowed' : 'pointer',
          [style.opacityVar]: prevDisabled ? '0.3' : '1',
        })}
        onClick={onPrevClick}
      />
      <IoIosArrowDropright
        className={style.icon}
        style={assignInlineVars({
          [style.cursorVar]: nextDisabled ? 'not-allowed' : 'pointer',
          [style.opacityVar]: nextDisabled ? '0.3' : '1',
        })}
        onClick={onNextClick}
      />
    </div>
  );
};

export default PrevNextBtn;
