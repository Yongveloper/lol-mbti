import Button from 'components/common/Button';
import CopyBtn from 'components/Buttons/CopyBtn';
import KakaoBtn from 'components/Buttons/KakaoBtn';
import Title from './Title';
import AllTypeBtn from 'components/Buttons/AllTypeBtn';

interface IMainViewProps {
  startHandler: () => void;
}

const MainView = ({ startHandler }: IMainViewProps) => {
  return (
    <main>
      <Title />
      <Button
        bgColor="lightBlue"
        fontColor="white"
        borderColor="lightBlue"
        onClick={startHandler}
      >
        시작 하기!
      </Button>
      <KakaoBtn />
      <CopyBtn />
      <AllTypeBtn />
    </main>
  );
};

export default MainView;
