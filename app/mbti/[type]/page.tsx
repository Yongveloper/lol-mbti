import Type from './Type';

export function generateStaticParams() {
  const types = [
    'ISTJ',
    'ISFJ',
    'ISTP',
    'ISFP',
    'ESTP',
    'ESFP',
    'ESTJ',
    'ESFJ',
    'INFJ',
    'INTJ',
    'INFP',
    'INTP',
    'ENFP',
    'ENTP',
    'ENFJ',
    'ENTJ',
  ].map((type) => ({
    type,
  }));

  return types;
}

const Page = ({ params }: any) => {
  console.log(params);

  return <Type type={params.type} />;
};

export default Page;
