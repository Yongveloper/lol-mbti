# 롤에서 알아보는 MBTI 테스트

## 🌟소개

<p align='center'>
<img width="300px" height="300px" alt="logo" src="https://user-images.githubusercontent.com/64254228/130260586-608c1b4a-f149-4cc8-83c5-77b949b5dbc0.png">
</p>

😁LOL(게임) 상황 속에서 알아보는 MBTI와 해당 유형에 적합한 포지션을 추천해주는 서비스😁

배포: [https://lol-mbti.vercel.app](https://lol-mbti.vercel.app)

### [개발 배경](https://yongvelpoer.gitbook.io/lol-mbti/)에서 개발 중 시행착오, 설계 등 확인할 수 있습니다.

<p align='center'>
    <img src="https://img.shields.io/badge/Typescript-v4.3.5-blue?logo=typescript"/>
    <img src="https://img.shields.io/badge/Next.js-v11.0.1-blue?logo=Next.js"/>
    <img src="https://img.shields.io/badge/styled components-v5.3.0-pink?logo=react">
</p>

## ❗ What I Earned

- 개발 전 **와이어프레임**, **기능명세서** 작성의 필요성
- 기능 단위 **Issue** 작성 후 **Issue 단위**로 개발 진행
- 컴포넌트 **구조 설계**하기
- **함수형 컴포넌트**의 사용
- **반응형** 웹 디자인 적용
- **useState**와 **useEffect** 사용
- **TypeScript** 기본적인 사용 및 이해
- Next.js의 **getStaticProps**에 대한 **SSG** 이해
- **SEO 최적화**
- **Styled-Component** 사용 및 이해
- **ThemProvider**를 이용한 다크모드 지원
- **Google Analytics** 적용
- **오픈 API(카카오톡 공유)** 적용 및 이해
- **html2canvas** + **file-saver**로 DOM 캡쳐, 저장 기능 구현 및 이해

### ✅ Next.js 11 -> 14 마이그레이션 (2024년 12월 18일)

- 관련 종속성 업데이트
  - React 17.0.2 -> 18.2.0
  - styled-components 5.3.0 -> 6.1.1
  - TypeScript 4.3.5 -> 4.5.2
- Link 태그 하위 태그로 a태그 있던 것 제거
- 최신 app router 구조로 변경
  - styled-components 적용 로직 추가
  - 구글 애널리틱스 코드 변경
  - styled-components 코드 변경
  - 카카오톡 공유하기 코드 변경
- getStaticProps -> generateStaticParams
- 폰트 최적화: @fontsource -> next/font
- metadata 적용법 변경

## 🌟 주요 기능 및 페이지

### SEO

- SEO 최적화로 인해 '롤 MBTI', '롤 MBTI 테스트' 등 관련 검색어로 검색하면 1순위로 보여지고 있습니다. (구글, 네이버, 다음, 빙 등)

### 테마(다크모드)

<img width="400" alt="darkmode" src="https://user-images.githubusercontent.com/64254228/130263140-4e282b9f-4d1e-4a64-9536-16a50729a110.gif">

- styled-component를 사용한 custom hook을 활용해서 상단에서 다크모드를 설정할 수 있습니다.

### 카카오톡 공유하기

<img width="400" alt="kakao-share" src="https://user-images.githubusercontent.com/64254228/130263996-d2589ee2-877c-42e2-9e97-2d7f43d80d8d.png">

- 카카오 API를 활용해서 카카오톡으로 해당 페이지를 공유할 수 있습니다.

### 문제 답변 페이지

<img width="400" alt="question" src="https://user-images.githubusercontent.com/64254228/130264404-f64fbf86-bb0d-4b97-b3da-424e6946d4b3.gif">

- 상단 화살표 버튼으로 문제를 전, 후로 이동할 수 있습니다.
- 답변 클릭 시 다음 문제로 넘어가며 총 12문제 입니다.
- Hash 자료구조를 활용해서 답변 클릭 시 답변에 맞는 MBTI 유형을 누적해서 도출하는 식으로 구성했습니다.

### 결과 보기

<img width="400" alt="result" src="https://user-images.githubusercontent.com/64254228/130264757-1a6c0c14-18e0-44ad-a776-731c3b7b704a.gif">

- 결과 보기 클릭 시 결과 로딩 모달창 컴포넌트를 불러오며 setTimeOut으로 결과 페이지로 넘겨줍니다.

### 결과 페이지

<img width="400" alt="result-page" src="https://user-images.githubusercontent.com/64254228/130265500-022a251c-a756-4b31-bcd7-717ba20dfac1.png">

- 해당 유형의 특징을 보여줍니다.
- 결과 저장하기 클릭 시 결과 내용을 html2canvas + file-saver를 사용해서 이미지로 저장할 수 있습니다.
- 링크 복사하기 클릭 시 해당 링크를 클립보드로 복사할 수 있습니다.

## 📚 기술 스택

<img width="400" alt="result-page" src="https://user-images.githubusercontent.com/64254228/130268396-9f416dc9-70d7-409d-ab0c-a745eff6da90.png">

# 💻 프로젝트 실행 방법

## 1. .gitignore 파일

```
/* .env 파일 */
NEXT_PUBLIC_KAKAO_API_KEY=카카오 API Key
```

## 2. 개발 환경 실행

```
yarn dev
```

## 3. 배포 환경 실행

```
1. yarn build
2. yarn start
```
