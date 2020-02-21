import React, { useState } from 'react';

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

  const [formVal, setFormVal] = useState('');

  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let bgColor;
  if (col === 0 || row === 0) bgColor = 'rgba(255,255,255,0.1)';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormVal(e.target.value);
    dispatchChange(`col${col}row${row}`, e.target.value);
  }

  const currentCell = `col${col}row${row}`;
  console.log(state.cellVals);
  const cell = state.cellVals.find(cell => cell.key = currentCell);
  console.log('cell!', cell);

  return (
    <div
      id={`col${col}row${row}`}
      style={{ backgroundColor: bgColor }}
      className="grid-cell">
      {(col === 0 && row === 0) && ' '}
      {(col === 0 && row !== 0) && <p>{alpha[(row - 1) % 26]}</p>}
      {(col !== 0 && row === 0) && <p>{alpha[(col - 1) % 26]}</p>}
      {(col !== 0 && row !== 0) && (
        <form className="grid-form">
          <input
            className="grid-form-input"
            type="text"
            placeholder=""
            onChange={handleChange}
            value={formVal}
          />
        </form>
      )}
    </div>
  )
}

export default Cell;