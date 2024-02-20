'use client';
import AllTypeBtn from 'components/Buttons/AllTypeBtn';
import CopyBtn from 'components/Buttons/CopyBtn';
import KakaoBtn from 'components/Buttons/KakaoBtn';
import ReplayBtn from 'components/Buttons/ReplayBtn';
import SaveImageBtn from 'components/Buttons/SaveImageBtn';
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
