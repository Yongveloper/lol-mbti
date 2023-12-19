import { Metadata, ResolvingMetadata } from 'next';
import Type from './Type';
import types from 'data/result';

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

type Props = {
  params: { type: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { type } = params;

  // fetch data
  const contents = types[type];
  const { position: positions, image } = contents;
  const position = positions[0];
  const subPosition = positions[1];

  return {
    title: `${type} : ${position}${subPosition}`,
    openGraph: {
      title: `${type} : ${position}${subPosition}`,
      images: [
        {
          url: `https://lol-mbti.vercel.app${image}`,
          width: 1200,
          height: 627,
          alt: '롤에서 알아보는 MBTI',
        },
      ],
    },
  };
}

const Page = ({ params }: { params: { type: string } }) => {
  return <Type type={params.type} />;
};

export default Page;
