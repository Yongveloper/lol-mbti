import styled from 'styled-components';

const Ul = styled.ul`
  margin-bottom: ${({ theme }) => theme.margin.base};
  text-align: left;
`;

const Li = styled.li`
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.margin.base};
  }
`;

interface IContentListProps {
  content: Array<string>;
}

const ContentList = ({ content }: IContentListProps) => {
  return (
    <Ul>
      {content.map((text, index) => (
        <Li key={text}>
          {index + 1}. {text}
        </Li>
      ))}
    </Ul>
  );
};

export default ContentList;
