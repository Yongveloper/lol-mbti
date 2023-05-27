import styled from 'styled-components';
import Button from '../common/Button';

const Clipboard = styled.input.attrs({ type: 'text' })`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const CopyBtn = () => {
  let currentUrl = '';

  if (typeof window !== 'undefined') {
    currentUrl = window.location.href;
  }

  const copyHandler = async () => {
    if (!navigator.clipboard) {
      return alert('복사하기가 지원되지 않는 브라우저입니다.');
    }

    try {
      await navigator.clipboard.writeText(currentUrl);
      alert('현재 주소가 클립보드에 복사되었습니다.');
    } catch (err) {
      alert('복사하는데 실패했습니다:' + err);
    }
  };

  return (
    <>
      <Button onClick={copyHandler}>링크 복사하기</Button>
      <Clipboard value={currentUrl} readOnly />
    </>
  );
};

export default CopyBtn;
