import Button from '../common/Button';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

interface ISaveImageBtnProps {
  divRef: React.RefObject<HTMLDivElement>;
}

function SaveImageBtn({ divRef }: ISaveImageBtnProps) {
  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <Button fontColor="red" borderColor="pink" onClick={handleDownload}>
      결과 저장하기
    </Button>
  );
}

export default SaveImageBtn;
