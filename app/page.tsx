'use client';

import Head from 'next/head';
import { useState } from 'react';
import { MainView, QuestionView } from 'components/Home';

export default function Home() {
  const [start, setStart] = useState(false);

  const startHandler = () => setStart(true);

  return (
    <>
      <Head>
        <title>롤에서 알아보는 MBTI 유형 - 나에게 맞는 포지션은?</title>
        <meta property="og:title" content="롤에서 알아보는 MBTI 유형" />
        <meta property="og:site_name" content="롤에서 알아보는 MBTI 유형" />
        <meta
          property="og:image"
          content="https://lol-mbti.vercel.app/images/logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:alt" content="롤에서 알아보는 MBTI" />
        <link rel="canonical" href="https://lol-mbti.vercel.app" />
      </Head>
      {start ? <QuestionView /> : <MainView startHandler={startHandler} />}
    </>
  );
}
