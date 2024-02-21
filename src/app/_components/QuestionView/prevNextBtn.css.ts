import { createVar, style } from '@vanilla-extract/css';

export const cursorVar = createVar();
export const opacityVar = createVar();

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const icon = style({
  width: '2.5rem',
  height: '2.5rem',
  cursor: cursorVar,
  opacity: opacityVar,
  transition: 'opacity 0.3s ease-in-out',
});

// const StyledButton = styled.svg<{ disabled: boolean }>`
//   width: 2.5rem;
//   height: 2.5rem;
//   cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
//   opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
//   transition: opacity 0.3s ease-in-out;
// `;
