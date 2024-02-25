import Button from '../common/Button';
import Link from 'next/link';

const ReplayBtn = () => {
  return (
    <Link href="/">
      <Button bgColor="lightBlue" fontColor="white" borderColor="lightBlue">
        테스트 하기
      </Button>
    </Link>
  );
};

export default ReplayBtn;
