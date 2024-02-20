import Button from '../common/Button';
import KakaoIcon from 'public/images/kakaotalk_logo_icon_147272.svg';

const KakaoBtn = () => {
  const handleShearToKakao = () => {
    const { Kakao, location } = window;
    Kakao.Share.sendScrap({
      requestUrl: location.href,
    });
  };

  return (
    <Button
      fontColor="yellow"
      borderColor="yellow"
      onClick={handleShearToKakao}
    >
      <KakaoIcon viewBox="0 0 60 48" width="30px" height="23px" />
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoBtn;
