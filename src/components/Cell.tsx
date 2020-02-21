import React from 'react';

interface Props {
  col: number;
  row: number;
}

const Cell: React.FC<Props> = ({ col, row }) => {

  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let bgColor;
  if (col === 0 || row === 0) bgColor = 'rgba(255,255,255,0.1)';

  return (
    <div style={{ backgroundColor: bgColor }} className="grid-cell">
      {(col === 0 && row === 0) && ' '}
      {(col === 0 && row !== 0) && alpha[(row - 1) % 26]}
      {(col !== 0 && row === 0) && alpha[(col - 1) % 26]}
      {(col !== 0 && row !== 0) && ' '}
    </div>
  )
}

export default Cell;