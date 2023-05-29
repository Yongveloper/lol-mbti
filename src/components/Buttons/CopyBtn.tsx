import Button from '../common/Button';

const CopyBtn = () => {
  const currentURL = (() => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  })();

  const copyHandler = async () => {
    if (!navigator.clipboard) {
      return alert('복사하기가 지원되지 않는 브라우저입니다.');
    }

    try {
      await navigator.clipboard.writeText(currentURL);
      alert('현재 주소가 클립보드에 복사되었습니다.');
    } catch (err) {
      alert('복사하는데 실패했습니다:' + err);
    }
  };

  return <Button onClick={copyHandler}>링크 복사하기</Button>;
};

export default CopyBtn;
