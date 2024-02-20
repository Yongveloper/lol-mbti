import { global } from 'styles/globalTheme.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as style from './button.css';

type Color =
  | 'contentBackground'
  | 'white'
  | 'whiteYellow'
  | 'yellow'
  | 'whiteBlue'
  | 'bluePurple'
  | 'lightBlue'
  | 'lightGray'
  | 'whiteGray'
  | 'darkGray'
  | 'laime'
  | 'lightRed'
  | 'pink'
  | 'red'
  | 'black';

interface IButtonProps {
  children: React.ReactNode;
  bgColor?: Color;
  fontColor?: Color;
  borderColor?: Color;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
  name?: string;
}

const Button = ({
  children,
  onClick,
  bgColor = 'contentBackground',
  fontColor = 'lightBlue',
  borderColor = 'whiteBlue',
  name,
}: IButtonProps) => (
  <button
    className={style.button}
    style={assignInlineVars({
      [style.backgroundColor]: global.color[bgColor],
      [style.fontColor]: global.color[fontColor],
      [style.borderColor]: global.color[borderColor],
    })}
    onClick={onClick}
    name={name}
  >
    {children}
  </button>
);

export default Button;
