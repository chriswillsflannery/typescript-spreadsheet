/**
 * @author @chriswillsflannery
 * @exports Column
 * contains Column component for use in App component
 */

import React from 'react';
import Cell from './Cell';

interface CellProp {
  key: string,
  value: string,
}

interface StateProp {
  cellVals: CellProp[];
}

interface Props {
  col: number;
  rows: number;
  dispatchChange: (x: string, y: string) => Promise<void>;
  state: StateProp;
}

const Column: React.FC<Props> = ({ col, rows, dispatchChange, state }) => {

  const cells = [];
  for (let i = 0; i < rows; i++) {
    cells.push(<Cell
      key={`row${i}`}
      col={col}
      row={i}
      dispatchChange={(x: string, y: string) => dispatchChange(x, y)}
      state={state}
    />)
  }

  return (
    <div className="grid-column">
      {cells}
    </div>
  )
}

export default Column;