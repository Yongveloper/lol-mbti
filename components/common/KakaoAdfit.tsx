import styled from 'styled-components';

const Container = styled.div<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  margin-bottom: ${({ theme }) => theme.margin.base};
`;

interface IKaKaoAdFitProps {
  width: string;
  height: string;
  unit: string;
}

const KakaoAdfit = ({ width, height, unit }: IKaKaoAdFitProps) => {
  return (
    <>
      <Container $width={width} $height={height}>
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
      </Container>
    </>
  );
};

export default KakaoAdfit;
