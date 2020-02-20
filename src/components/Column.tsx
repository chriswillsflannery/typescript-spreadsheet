import React from 'react';
import Cell from './Cell';

interface Props {
  uq: string;
  rows: number;
}

const Column: React.FC<Props> = ({ uq, rows }) => {

  const cells = [];
  for (let i = 0; i < rows; i++) {
    cells.push(<Cell disp={`${uq}row${i}`} key={`row${i}`} />)
  }

  return (
    <div className="grid-column">
      {cells}
    </div>
  )
}

export default Column;