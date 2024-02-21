import Button from 'src/app/_components/common/Button';
import CopyBtn from 'src/app/_components/Buttons/CopyBtn';
import KakaoBtn from 'src/app/_components/Buttons/KakaoBtn';
import Title from './Title';
import AllTypeBtn from 'src/app/_components/Buttons/AllTypeBtn';

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
