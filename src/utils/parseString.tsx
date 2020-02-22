
export const parseString = (string: string): string[] => {

  string = string.split(' ').join('');

  const parsed: string[] = [];

  let currentString = '';
  for (let i = 0; i < string.length; i++) {
    currentString += string[i];
    if (
      string[i + 1] === '+' ||
      string[i + 1] === '-' ||
      string[i + 1] === '*' ||
      string[i + 1] === '/'
    ) {
      parsed.push(currentString);
      currentString = '';
      parsed.push(string[i + 1]);
      i += 1;
    }
  }
  parsed.push(currentString);
  return parsed;
}