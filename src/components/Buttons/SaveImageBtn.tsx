import Button from '../common/Button';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';

interface ISaveImageBtnProps {
  divRef: React.RefObject<HTMLDivElement>;
}

function SaveImageBtn({ divRef }: ISaveImageBtnProps) {
  const handleDownload = async () => {
    if (!divRef.current) return;
    try {
      const blob = await domtoimage.toBlob(divRef.current);
      saveAs(blob, 'result.png');
    } catch (error) {
      console.error('결과를 저장할 수 없습니다.', error);
    }
  };

  return (
    <Button fontColor="red" borderColor="pink" onClick={handleDownload}>
      결과 저장하기
    </Button>
  );
}

export default SaveImageBtn;
