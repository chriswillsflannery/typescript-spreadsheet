import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 1px solid white;
`;

interface Row {

}

const Row: React.FC = () => {
  return (
    <>
      <p>Row</p>
    </>
  )
}

const App: React.FC = () => {

  const [numRows, setNumRows] = useState(5);
  const [numColumns, setNumColumns] = useState(5);

  const styles = {
    row: {
      gridTemplateColumns: `repeat(${numRows}, 1fr)`,
    }
  };

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(<Row style={styles.row} key={i} />);
  }

  return (
    <div className="App">
      <header className="App-header">
        <StyledGrid>
          {rows}
        </StyledGrid>
      </header>
    </div>
  );
}

export default App;
