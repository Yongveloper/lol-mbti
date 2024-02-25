'use client';

import { useState } from 'react';
import QuestionView from './_components/QuestionView';
import MainView from './_components/MainView';

export default function Home() {
  const [start, setStart] = useState(false);

  const startHandler = () => setStart(true);

  return (
    <>{start ? <QuestionView /> : <MainView startHandler={startHandler} />}</>
  );
}
