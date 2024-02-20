import zed from 'public/images/zed.png';
import Image from 'next/image';
import * as style from './loadingModal.css';

const LoadingModal = () => {
  return (
    <div className={style.container}>
      <div className={style.overlay} />
      <div className={style.content}>
        <h2 className={style.text}>결과를 분석 중입니다...</h2>
        <Image
          src={zed}
          width={150}
          height={150}
          alt="zed"
          className={style.image}
        />
      </div>
    </div>
  );
};

export default LoadingModal;
