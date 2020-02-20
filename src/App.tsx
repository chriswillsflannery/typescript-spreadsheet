import React, { useState } from 'react';
import Column from './components/Column';
import styled from 'styled-components';
import './App.css';

const App: React.FC = () => {

  const [numRows, setNumRows] = useState(5);
  const [numColumns, setNumColumns] = useState(5);

  const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${numRows}, 1fr);
  `;

  const columns = [];
  for (let i = 0; i < numColumns; i++) {
    columns.push(<Column key={`col${i}`} uq={`col${i}`} rows={numRows} />)
  }

  return (
    <div className="App">
      <StyledGrid>
        {columns}
      </StyledGrid>
    </div>
  );
}

export default App;
