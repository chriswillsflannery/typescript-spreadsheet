
interface CellProp {
  key: string,
  value: string
}

interface StateProp {
  cellVals: CellProp[];
}

export const convertVals = (array: string[], state: StateProp) => {
  console.log('array', array);
  console.log('state', state);
  const convertedArray = array.map(str => {
    if (str[0] === 'c') {
      const cellName = state.cellVals.find(cell => cell.key === str);
      if (!cellName) {
        return '';
      } else {
        //cell exists and has value

      }

    }
    return str;
  })
  console.log('ca', convertedArray);
}