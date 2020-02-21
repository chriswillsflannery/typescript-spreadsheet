import React from 'react';
import Cell from './Cell';

interface Props {
  col: number;
  rows: number;
}

const Column: React.FC<Props> = ({ col, rows }) => {

  const cells = [];
  for (let i = 0; i < rows; i++) {
    cells.push(<Cell key={`row${i}`} col={col} row={i} />)
  }

  return (
    <div className="grid-column">
      {cells}
    </div>
  )
}

export default Column;