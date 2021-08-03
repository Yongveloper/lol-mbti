import Head from 'next/head';
import { useState } from 'react';
import LoadingModal from 'src/components/common/LoadingModal';
import { MainView, QuestionView } from 'src/components/Home';

export default function Home() {
  const [start, setStart] = useState(false);

  const startTest = () => setStart(true);

  return (
    <>
      <Head>
        <title>롤에서 알아보는 MBTI 유형 - 나에게 맞는 포지션은?</title>
      </Head>
      {start ? <QuestionView /> : <MainView startTest={startTest} />}
      {/* <LoadingModal /> */}
    </>
  );
}
