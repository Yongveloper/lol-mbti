'use client';

import { useState } from 'react';
import { MainView, QuestionView } from 'components/Home';

export default function Home() {
  const [start, setStart] = useState(false);

  const startHandler = () => setStart(true);

  return (
    <>{start ? <QuestionView /> : <MainView startHandler={startHandler} />}</>
  );
}
