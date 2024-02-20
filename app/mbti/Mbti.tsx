import Content from 'components/common/Content';
import Link from 'next/link';
import types from 'data/result';
import ReplayBtn from 'components/Buttons/ReplayBtn';
import KakaoBtn from 'components/Buttons/KakaoBtn';
import CopyBtn from 'components/Buttons/CopyBtn';
import * as style from './mbti.css';

const Mbti = () => {
  const mbtiTypes = Object.keys(types);
  return (
    <>
      <Content>
        <h1 className={style.mainTitle}>모든 유형과 포지션</h1>
        <h2 className={style.subTitle}>
          모든 유형과 추천 포지션을 한 눈에 확인해보세요!
        </h2>
        {mbtiTypes.map((type, index) => (
          <ul key={index}>
            <Link href={`/mbti/${type}`}>
              <li className={style.mbtiItem}>
                <span className={style.mbtiTypeText}>{type}</span>{' '}
                {types[type].position}
              </li>
            </Link>
          </ul>
        ))}
      </Content>
      <ReplayBtn />
      <KakaoBtn />
      <CopyBtn />
    </>
  );
};

export default Mbti;
