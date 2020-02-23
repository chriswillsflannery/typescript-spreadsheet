/* eslint-disable no-eval */
/**
 * @author @chriswillsflannery
 * @exports Cell
 * contains Cell component for use in Column component
 */

import React from 'react';
import { parseString } from '../utils/parseString';
import { convertVals } from '../utils/convertVals';

interface CellProp {
  key: string,
  value: string,
}

interface StateProp {
  cellVals: CellProp[];
}

interface Props {
  col: number;
  row: number;
  dispatchChange: any;
  state: StateProp;
}

const Cell: React.FC<Props> = ({ col, row, dispatchChange, state }) => {

  let bgColor;
  if (col === 0 || row === 0) bgColor = 'rgba(255,255,255,0.1)';

  const currentCell = `col${col}row${row}`;
  const cell = state.cellVals.find(cell => cell.key === currentCell);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchChange(`col${col}row${row}`, e.target.value);
  }

  // to scale out, we would need to sanitize input to prevent SQL injection / XSS attack
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (cell?.value[0] === '=' && !isNaN(Number(cell?.value[1]))) {
        let num = eval(cell?.value.slice(1));
        dispatchChange(`col${col}row${row}`, num);
      } else if (cell?.value[0] === '=' && cell?.value[1] === '(') {
        try {
          //validate input is valid col/row syntax
          let input = cell?.value.slice(2, cell?.value.length - 1);

          // these helper functions don't cover all edge cases so please use cell input format described in Readme
          const parsedArray = parseString(input);
          console.log('parsedArray', parsedArray);
          const convertedArray = convertVals(parsedArray, state);
          console.log('converted array', convertedArray);
          // try eval on this output value
          try {
            const evaluated = eval(convertedArray);
            console.log('evaluated', evaluated);
            dispatchChange(`col${col}row${row}`, evaluated);
          } catch (err) {
            alert('Error: Uh oh, something\'s not right!');
          }
        } catch (err) {
          alert('Error: please enter valid column/row format');
        }
      }
    } catch (err) {
      alert('Error: please enter valid math.');
    }
  }
  return (
    <div
      id={`col${col}row${row}`}
      style={{ backgroundColor: bgColor }}
      className="grid-cell">
      {(col === 0 && row === 0) && ' '}
      {(col === 0 && row !== 0) && <p>{`row${row}`}</p>}
      {(col !== 0 && row === 0) && <p>{`col${col}`}</p>}
      {(col !== 0 && row !== 0) && (
        <form onSubmit={handleSubmit} className="grid-form">
          <input
            className="grid-form-input"
            type="text"
            placeholder=""
            onChange={handleChange}
            value={cell?.value || ''}
          />
        </form>
      )}
    </div>
  )
}

export default Cell;