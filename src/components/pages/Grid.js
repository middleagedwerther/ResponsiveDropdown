import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr;
`;

const ContainerWide = styled.div`
  width: 100%;
  height: 100vh;
  grid-column: 1;
  grid-row: 1;
  z-index: 999;
  display: grid;
  grid-template-rows: repeat(100, 1vw);
`;

const ContainerTall = styled.div`
  width: 100%;
  height: 100vh;
  grid-column: 1;
  grid-row: 1;
  z-index: 999;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
`;

const CellTall = styled.div`
  border-left: 1px solid ${props => (props.isTenth ? 'red' : 'rgba(0, 0, 0, 0.3)')};
  box-sizing: border-box;
  height: 100vw;
  position: relative;
`;

const CellWide = styled.div`
  border-top: 1px solid ${props => (props.isTenth ? 'red' : 'rgba(0, 0, 0, 0.3)')};
  box-sizing: border-box;
  height: 1vw;
  width: 100vw;
  position: relative;
`;

const Label = styled.div`
  position: absolute;
  color: red;
  font-size: 1vw;
`;

export default function Grid() {
  return (
    <Container>
      <ContainerTall>
        {Array.from({ length: 100 }).map((_, index) => (
          <CellTall key={index} isTenth={index % 10 === 0}>
            {index % 10 === 0 && <Label style={{ top: '0', left: '-2vw' }}>{index}</Label>}
          </CellTall>
        ))}
      </ContainerTall>
      <ContainerWide>
        {Array.from({ length: 100 }).map((_, index) => (
          <CellWide key={index} isTenth={index % 10 === 0}>
            {index % 10 === 0 && <Label style={{ top: '-2vw', left: '0' }}>{index}</Label>}
          </CellWide>
        ))}
      </ContainerWide>
    </Container>
  );
}
