'use client';
import AllTypeBtn from 'src/app/_components/Buttons/AllTypeBtn';
import CopyBtn from 'src/app/_components/Buttons/CopyBtn';
import KakaoBtn from 'src/app/_components/Buttons/KakaoBtn';
import ReplayBtn from 'src/app/_components/Buttons/ReplayBtn';
import SaveImageBtn from 'src/app/mbti/[type]/_components/SaveImageBtn';
import React, { useRef } from 'react';

interface IContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
  const resultRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={resultRef}>{children}</div>
      <ReplayBtn />
      <SaveImageBtn divRef={resultRef} />
      <KakaoBtn />
      <CopyBtn />
      <AllTypeBtn />
    </>
  );
};

export default Content;
