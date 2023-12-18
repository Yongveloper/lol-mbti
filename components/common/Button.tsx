import styled, { css } from 'styled-components';
import { notoSansKr } from 'styles/GlobalStyle';

type Color =
  | 'contentBackground'
  | 'white'
  | 'whiteYellow'
  | 'yellow'
  | 'whiteBlue'
  | 'bluePuple'
  | 'lightBlue'
  | 'lightGray'
  | 'whiteGray'
  | 'darkGray'
  | 'laime'
  | 'lightRed'
  | 'pink'
  | 'red'
  | 'black';

const SButton = styled.button<{
  $bgColor: Color;
  $fontColor: Color;
  $borderColor: Color;
}>`
  ${({ theme, $bgColor, $fontColor, $borderColor }) => {
    return css`
      width: 100%;
      padding: ${theme.padding.small} ${theme.padding.base};
      margin-bottom: ${theme.margin.medium};
      border: 2px solid ${theme.color[$borderColor]};
      border-radius: 4px;
      color: ${theme.color[$fontColor]};
      font-size: ${theme.font.size.small};
      font-family: ${notoSansKr.style.fontFamily};
      background-color: ${theme.color[$bgColor]};
      cursor: pointer;
    `;
  }}
`;

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
  <SButton
    onClick={onClick}
    name={name}
    $bgColor={bgColor}
    $fontColor={fontColor}
    $borderColor={borderColor}
  >
    {children}
  </SButton>
);

export default Button;
