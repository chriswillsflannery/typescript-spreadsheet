
export const parseString = (string: string): string[] => {
  const parsed: string[] = [];

  for (let i = 0; i < string.length; i++) {
    console.log('iteration', string[i], i);
  }

  return parsed;
}