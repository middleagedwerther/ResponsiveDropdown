import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js"

// Define a styled component for the form container
const FormContainer = styled.div`
  width: 100%; /* Full width of parent */
  height: 100%; /* Full height of parent */
  display: flex; /* Flexbox to center content */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  background-color: grey;
  padding: 20px;
  border-radius: 5px;

  @media screen and (max-width: 341px) {
    padding: 10px;
    // background-color: orange;
  }
`;

// Define a styled component for the form
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 260px; /* Minimum width of 260px */

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

// Define a styled component for the input fields
const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-family: ${(props) => props.fontFamily};
  width: 100%;

  @media screen and (max-width: 341px) {
    width: 100%; /* Ensure it does not overflow */
    // background:orange;
  }
`;

// Define a styled component for the select dropdown
const StyledSelect = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-family: ${(props) => props.fontFamily};
  width: 100%;
`;

// Define a styled component for the radio button container
const RadioContainer = styled.div`
  margin-bottom: 10px;
`;

// Define a styled component for the radio button label
const RadioLabel = styled.label`
  display: block;
  margin-bottom: -8px;
  font-family: ${(props) => props.fontFamily};
`;

// Define a styled component for the submit button
const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-family: ${(props) => props.fontFamily};

  &:hover {
    background-color: blue;
  }
`;

const StyledMessage = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 150px;
  font-family: ${(props) => props.fontFamily};
  width: 100%;
`;

// Define a styled component for the label above each field
const FieldLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  font-family: ${(props) => props.fontFamily};
`;

const FormHeading = styled.label`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
  font-family: ${(props) => props.fontFamily};
`;

export default function FormSubmit() {
  const { GlobalFont } = useGlobals();

  return (
    <FormContainer>
      <StyledForm action="https://formsubmit.co/greyhoundcoding@gmail.com" method="POST">
        <FormHeading fontFamily={GlobalFont}>Get a FREE quote</FormHeading>

        <StyledInput type="text" name="name" placeholder="Name" required fontFamily={GlobalFont} />

        <StyledInput type="email" name="email" placeholder="Email" required fontFamily={GlobalFont} />

        <StyledInput type="tel" name="phone" placeholder="Telephone Number" required fontFamily={GlobalFont} />

        <StyledMessage name="message" placeholder="Message" required fontFamily={GlobalFont} />

        <StyledButton type="submit" fontFamily={GlobalFont}>Submit</StyledButton>
        <StyledInput type="hidden" name="_next" value="http://localhost:3000/marketing" fontFamily={GlobalFont} />
      </StyledForm>
    </FormContainer>
  );
}
