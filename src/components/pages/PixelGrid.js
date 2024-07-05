import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* Changed to 100% to cover the entire document height */
  top: 0;
  left: 0;
`;

const HorizontalLine = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: ${props => (props.isTenth ? 'red' : 'rgba(0, 0, 0, 0.3)')};
  top: ${props => props.top}px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px ${props => (props.isTenth ? 'red' : 'rgba(255, 255, 255, 1)')};
  }
`;

const VerticalLine = styled.div`
  position: absolute;
  height: ${props => props.height}px; /* Set the height to match the document height */
  width: 1px;
  background-color: ${props => (props.isTenth ? 'red' : 'rgba(0, 0, 0, 0.3)')};
  left: ${props => props.left}px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px ${props => (props.isTenth ? 'red' : 'rgba(255, 255, 255, 1)')};
  }
`;
const Label = styled.div`
  position: absolute;
  font-size: 10px;
  color: red;
  background-color: rgba(255, 255, 255, 1); /* Add background color */
  padding: 2px 4px; /* Add padding */
  border-radius: 3px; /* Add border radius for better appearance */
  top: ${props => (props.horizontal ? props.top - 10 : 0)}px;
  left: ${props => (props.horizontal ? 0 : props.left + 5)}px;
  transition: text-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1; /* Set opacity to 0 on hover */
  }
`;

const PixGrid = () => {
  const [documentHeight, setDocumentHeight] = useState(document.documentElement.scrollHeight);

  useEffect(() => {
    const handleResize = () => {
      const newDocumentHeight = document.documentElement.scrollHeight;
      console.log("Document Height:", newDocumentHeight);
      setDocumentHeight(newDocumentHeight);
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lines = [];
  const spacing = 20;

  for (let i = 0; i < documentHeight / spacing; i++) {
    const isTenth = i % 10 === 0;
    lines.push(<HorizontalLine key={`h${i}`} top={i * spacing} isTenth={isTenth} />);
    if (isTenth) {
      lines.push(<Label key={`lh${i}`} top={i * spacing} horizontal>{i * spacing}px</Label>);
    }
  }

  for (let i = 0; i < window.innerWidth / spacing; i++) {
    const isTenth = i % 10 === 0;
    lines.push(<VerticalLine key={`v${i}`} left={i * spacing} isTenth={isTenth} height={documentHeight} />
    );
    if (isTenth) {
      lines.push(<Label key={`lv${i}`} left={i * spacing}>{i * spacing}px</Label>);
    }
  }

  return <Container>{lines}</Container>;
};

export default PixGrid;
