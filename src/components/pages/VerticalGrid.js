import React from 'react';
import styled from 'styled-components';



const Container = styled.div`

  width:100%;
  height:100vh;
  z-index: 999; 
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1vw);
`;

const Cell = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box; 
  height: 100vw;
`;


export default function Gridlines() {
  return (
    <Container>
      {Array.from({ length: 1000 }).map((_, index) => (
        <Cell key={index} />
      ))}
    </Container>
  );
}
