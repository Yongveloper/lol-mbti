import Button from '../common/Button';
import Link from 'next/link';

const AllTypeBtn = () => {
  return (
    <Link href="/mbti">
      <Button fontColor="laime" borderColor="laime">
        모든 유형 보러가기
      </Button>
    </Link>
  );
};

export default AllTypeBtn;
