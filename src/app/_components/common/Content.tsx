import * as style from './content.css';

interface IContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
  return <div className={style.container}>{children}</div>;
};

export default Content;
