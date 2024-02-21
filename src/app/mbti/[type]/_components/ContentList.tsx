import * as style from './contentList.css';

interface IContentListProps {
  content: string[];
}

const ContentList = ({ content }: IContentListProps) => {
  return (
    <ul className={style.list}>
      {content.map((text, index) => (
        <li key={text}>
          {index + 1}. {text}
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
