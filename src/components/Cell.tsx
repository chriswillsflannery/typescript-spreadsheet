import React from 'react';

interface Props {
  col: number;
  row: number;
}

const Cell: React.FC<Props> = ({ col, row }) => {
  return (
    <div className="grid-cell ruler" >
      {(col === 0 && row === 0) && 0}
      {(col === 0 && row !== 0) && row}
      {(col !== 0 && row === 0) && col}
      {(col !== 0 && row !== 0) && 'x'}
    </div>
  )
}

export default Cell;