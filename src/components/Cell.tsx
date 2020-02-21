import React, { useState } from 'react';

interface Props {
  col: number;
  row: number;
  dispatchChange: any;
  state: object;
}

const Cell: React.FC<Props> = ({ col, row, dispatchChange, state }) => {

  const [formVal, setFormVal] = useState('');

  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let bgColor;
  if (col === 0 || row === 0) bgColor = 'rgba(255,255,255,0.1)';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormVal(e.target.value);
    dispatchChange(`col${col}row${row}`, e.target.value);
    console.log('state', state);
  }

  // let cellValue = state[`col${col}row${row}`];

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