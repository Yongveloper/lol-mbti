import Button from '../common/Button';
import styled from 'styled-components';
import Link from 'next/link';

const SButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ReplayBtn = () => {
  return (
    <Link href="/">
      <SButton bgColor="lightBlue" fontColor="white" borderColor="lightBlue">
        테스트 하기
      </SButton>
    </Link>
  );
};

export default ReplayBtn;
