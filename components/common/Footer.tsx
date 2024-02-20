import KakaoAdfit from './KakaoAdfit';
import * as style from './footer.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <KakaoAdfit width="320px" height="100px" unit="DAN-6X6csqaRgRsz1LqA" />
      <KakaoAdfit width="300px" height="250px" unit="DAN-kNNgmAXByO4ajNL6" />
      <span className={style.span}>Contact: yongyong5766@gmail.com</span>
      <span className={style.span}>© yongyong Co. all rights reserved.</span>
    </footer>
  );
};

export default Footer;
