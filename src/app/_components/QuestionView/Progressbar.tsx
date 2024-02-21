import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as style from './progressbar.css';

interface IProgressbarProps {
  current: number;
}

const Progressbar = ({ current }: IProgressbarProps) => {
  return (
    <div className={style.container}>
      <div
        className={style.bar}
        style={assignInlineVars({
          [style.widthVar]: `${(100 / 11) * current}%`,
        })}
      />
    </div>
  );
};

export default Progressbar;
