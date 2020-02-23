/**
 * @author @chriswillsflannery
 * @exports convertVals
 * contains convertVals logic for use in Cell.tsx
 */

interface CellProp {
  key: string,
  value: string
}

interface StateProp {
  cellVals: CellProp[];
}

export const convertVals = (array: string[], state: StateProp): string => {

  const convertedArray = array.map(str => {
    if (str[0] === 'c') {
      const cellName: CellProp | undefined = state.cellVals.find(cell => cell.key === str);
      if (!cellName) {
        return '';
      } else {
        //cell exists and has value
        return cellName.value;
      }

    }
    return str;
  })
  return convertedArray.join('');
}