import React from 'react';

interface Props {
  disp: string;
}

const Cell: React.FC<Props> = ({ disp }) => {
  return (
    <div className="grid-cell ruler" >{disp}</div>
  )
}

export default Cell;