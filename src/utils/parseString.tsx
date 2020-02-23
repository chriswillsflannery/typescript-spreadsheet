/**
 * @author @chriswillsflannery
 * @exports parseString
 * contains string parser logic for use in Cell.tsx
 */

export const parseString = (string: string): string[] => {

  string = string.split(' ').join('');

  const parsed: string[] = [];

  let currentString: string = '';
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