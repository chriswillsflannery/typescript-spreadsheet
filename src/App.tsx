import React, { useState, useReducer } from 'react';
import Column from './components/Column';
import { reducer, initialState } from './reducer/reducer';
import './App.css';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [numRows, setNumRows] = useState<number>(6);
  const [numColumns, setNumColumns] = useState<number>(6);

  const handleChange = async (a: string, b: string) => {
    dispatch({ type: 'setCellValue', payload: { key: a, value: b } });
  }

  const styles_grid = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`
  }

  const columns: JSX.Element[] = [];
  for (let i = 0; i < numColumns; i++) {
    columns.push(<Column
      key={`col${i}`}
      col={i}
      rows={numRows}
      dispatchChange={(x: string, y: string) => handleChange(x, y)}
      state={state}
    />)
  }

  return (
    <div className="App">
      <main style={styles_grid}>
        {columns}
      </main>
      <div className="Controller">
        <button onClick={() => setNumRows(numRows + 1)}>Add Row</button>
        <button onClick={() => setNumColumns(numColumns + 1)}>Add Column</button>
      </div>
    </div>
  );
}

export default App;
