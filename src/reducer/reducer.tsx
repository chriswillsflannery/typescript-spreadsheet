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
    value: 'welcome'
  }, {
    key: 'col2row1',
    value: 'friends'
  }]
};

type Action = { type: string; payload: Payload }
type State = { cellVals: Payload[] }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setCellValue':
      return {
        cellVals: [
          ...state.cellVals,
          action.payload
        ]
      }
    default:
      return state;
  }
}