import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as style from './kakaoAdfit.css';

interface IKaKaoAdFitProps {
  width: string;
  height: string;
  unit: string;
}

const KakaoAdfit = ({ width, height, unit }: IKaKaoAdFitProps) => {
  return (
    <div
      className={style.container}
      style={assignInlineVars({
        [style.width]: width,
        [style.height]: height,
      })}
    >
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={unit}
        data-ad-width={width}
        data-ad-height={height}
      ></ins>
      <script
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      ></script>
    </div>
  );
};

export default KakaoAdfit;
