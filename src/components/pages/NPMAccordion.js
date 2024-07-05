import React from 'react';
import Collapsible from 'react-collapsible';
import styled, { css } from 'styled-components';

// Define the styled components
const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
//   width:90%;
  
`;

const AccordionTrigger = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ccc;
  position: relative;

  ${({ collapsed }) =>
    collapsed &&
    css`
      background-color: #e2e2e2;
    `}
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  transition: transform 0.3s ease;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000;
    transition: opacity 0.3s ease;
  }

  ::before {
    width: 8px;
    height: 2px;
    background-color: #000;
  }

  ::after {
    width: 2px;
    height: 8px;
    background-color: #000;
  }

  ${({ expanded }) =>
    expanded &&
    css`
      ::before {
        opacity: 0;
      }

      ::after {
        transform: rotate(45deg);
      }
    `}
`;
const AccordionContent = styled.div`
  padding: 10px;
  background-color: white;
  width:90%;
  display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};
`;


const NPMAccordion = () => {
  const [expandedQuestions, setExpandedQuestions] = React.useState([]);

  const toggleAccordion = (questionId) => {
    if (expandedQuestions.includes(questionId)) {
      setExpandedQuestions(expandedQuestions.filter((id) => id !== questionId));
    } else {
      setExpandedQuestions([...expandedQuestions, questionId]);
    }
  };

  return (
    <AccordionContainer>
      <Collapsible
        trigger={
          <AccordionTrigger collapsed={!expandedQuestions.includes(1)} onClick={() => toggleAccordion(1)}>
            Start here
            <ArrowIcon expanded={expandedQuestions.includes(1)} />
          </AccordionTrigger>
        }
      >
        <AccordionContent collapsed={!expandedQuestions.includes(1)}>
          <p>
            This is the collapsible content. It can be any element or React component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next section!
          </p>
        </AccordionContent>
      </Collapsible>

      <Collapsible
        trigger={
          <AccordionTrigger collapsed={!expandedQuestions.includes(2)} onClick={() => toggleAccordion(2)}>
            Question 2
            <ArrowIcon expanded={expandedQuestions.includes(2)} />
          </AccordionTrigger>
        }
      >
        <AccordionContent collapsed={!expandedQuestions.includes(2)}>
          <p>
            Answer 2
          </p>
        </AccordionContent>
      </Collapsible>
    </AccordionContainer>
  );
};

export default NPMAccordion;