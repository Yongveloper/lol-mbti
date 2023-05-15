import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      padding: ${theme.padding.xLarge} ${theme.padding.base};
      margin-bottom: ${theme.margin.xLarge};
      background-color: ${theme.color.contentBackground};
      box-shadow: ${theme.shadow.base};
      border: 2px solid ${theme.color.borderColor};
      text-align: center;
    `;
  }}
`;

interface IContentProps {
  className?: string;
  children: React.ReactNode;
}

const Content = ({ className, children }: IContentProps) => {
  return <Container className={className}>{children}</Container>;
};

export default Content;
