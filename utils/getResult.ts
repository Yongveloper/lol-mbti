interface MbtiType {
  [key: string]: number;
}

export const getResult = (selected: string[]): string => {
  const mbti: MbtiType = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };
  const mbtiTypes = Object.keys(mbti);

  selected.forEach((type) => {
    const selectedType = type[0];
    mbti[selectedType]++;
  });

  const result = mbtiTypes.filter((type) => mbti[type] >= 2).join('');

  return result;
};
