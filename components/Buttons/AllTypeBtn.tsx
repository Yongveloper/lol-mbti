import Button from '../common/Button';
import styled from 'styled-components';
import Link from 'next/link';

const SButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const AllTypeBtn = () => {
  return (
    <Link href="/mbti">
      <SButton fontColor="laime" borderColor="laime">
        모든 유형 보러가기
      </SButton>
    </Link>
  );
};

export default AllTypeBtn;
