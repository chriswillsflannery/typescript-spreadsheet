import React, { useState } from 'react';
import Column from './components/Column';
import styled from 'styled-components';
import './App.css';

const App: React.FC = () => {

  const [numRows, setNumRows] = useState(6);
  const [numColumns, setNumColumns] = useState(6);

  const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${numColumns}, 1fr);
  `;

  const columns = [];
  for (let i = 0; i < numColumns; i++) {
    columns.push(<Column key={`col${i}`} col={i} rows={numRows} />)
  }

  return (
    <div className="App">
      <StyledGrid>
        {columns}
      </StyledGrid>
      <div className="Controller">
        <button onClick={() => setNumRows(numRows + 1)}>Add Row</button>
        <button onClick={() => setNumColumns(numColumns + 1)}>Add Column</button>
      </div>
    </div>
  );
}

export default App;
