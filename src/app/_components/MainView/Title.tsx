import Content from 'src/app/_components/common/Content';
import Image from 'next/image';
import topIcon from 'public/images/position/top.png';
import jgIcon from 'public/images/position/jg.png';
import midIcon from 'public/images/position/mid.png';
import adIcon from 'public/images/position/ad.png';
import spIcon from 'public/images/position/sp.png';
import * as style from './title.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { global, vars } from 'src/styles/globalTheme.css';

const Title = () => {
  const images = [topIcon, jgIcon, midIcon, adIcon, spIcon];
  const textColors = [
    global.color.lightBlue,
    vars.themeColor.color.mainFontColor,
    global.color.red,
    global.color.yellow,
    global.color.laime,
    global.color.bluePurple,
  ];
  const texts = ['롤', '에서 알아보는', 'M', 'B', 'T', 'I'];
  return (
    <Content>
      <h1 className={style.mainTitle}>
        {texts.map((text, index) => (
          <span
            key={index}
            className={style.textColor}
            style={assignInlineVars({
              [style.textColorVar]: textColors[index],
            })}
          >
            {text}
          </span>
        ))}{' '}
        테스트
      </h1>
      <h2 className={style.subTitle}>
        롤에서 알아보는 MBTI 유형과
        <br />
        나에게 맞는 포지션은 어디일까?
      </h2>
      <div className={style.imageContainer}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="position"
            width={50}
            height={50}
          />
        ))}
      </div>
    </Content>
  );
};

export default Title;
