/**
 * @author @chriswillsflannery
 * @exports initialState
 * @exports reducer
 * contains reducer logic for use with the useReducer hook in About.tsx.
 */

interface Payload {
  key: string;
  value: string;
}

interface IinitialState {
  cellVals: Payload[];
}

export const initialState: IinitialState = {
  cellVals: [{
    key: 'col1row1',
    value: '1'
  }, {
    key: 'col2row1',
    value: '2'
  }, {
    key: 'col3row1',
    value: '=1+2, for example'
  }, {
    key: 'col4row1',
    value: '=(col1row1+col2row1)'
  }]
};

type Action = { type: string; payload: Payload }
type State = { cellVals: Payload[] }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setCellValue':
      let prevState = { ...state };
      const cell: Payload | undefined = prevState.cellVals.find(cell => cell.key === action.payload.key);
      if (cell) {
        cell.value = action.payload.value;
        return {
          ...prevState
        }
      } else {
        return {
          cellVals: [
            ...state.cellVals,
            action.payload
          ]
        }
      }
    default:
      return state;
  }
}