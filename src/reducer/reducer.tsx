/**
 * @author @chriswillsflannery
 * @exports initialState
 * @exports reducer
 * contains reducer logic for use with the useReducer hook in About.tsx.
 */

export const initialState = {};

type Payload = { key: string, value: string }
type Action = { type: string; payload: Payload }
type State = {}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setCellValue':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    default:
      return state;
  }
}