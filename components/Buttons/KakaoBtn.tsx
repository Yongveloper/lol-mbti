import Button from '../common/Button';
import styled from 'styled-components';
import KakaoIcon from 'public/images/kakaotalk_logo_icon_147272.svg';

const SButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoBtn = () => {
  const onClick = () => {
    const { Kakao, location } = window;
    Kakao.Link.sendScrap({
      requestUrl: location.href,
    });
  };

  return (
    <SButton fontColor="yellow" borderColor="whiteYellow" onClick={onClick}>
      <KakaoIcon viewBox="0 0 60 48" width="30px" height="23px" />
      카카오톡 공유하기
    </SButton>
  );
};

export default KakaoBtn;
