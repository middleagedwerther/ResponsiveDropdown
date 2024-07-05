import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import FormSubmit from './FormSubmit';
import bkgrnd from "../../images/amerifence.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { useGlobals } from "../../Globals.js";
import FooterWithIcon from './FooterWithIcon.js';
import Accordion from "./SitePointAccordion.js";

const ContactUsWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  margin-top: 50px;
`;

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Add gap between the items */
`;

const ContactDetailsItem = styled.div`
  display: flex;
  align-items: center;
`;

const ContactDetailsText = styled.p`
  margin: 0 0 0 10px; /* Margin to the left of the text for spacing */
`;

const FormContainer = styled.div`
  display: flex;
  height: 450px;
  width: 400px; /* Set the desired width for the form container */
  padding: 20px;
  background-color: grey;
  border-radius: 5px;

  @media screen and (max-width: 642px) {
    width: 100%; /* Make the form container take full width on smaller screens */
  }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 10px;
  border: 2px solid black;
  margin: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);


  @media screen and (max-width: 642px) {
    flex-direction: column; /* Stack the children vertically on smaller screens */
    align-items: center; /* Center align the children */
  }
`;

const Container = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  padding: 20px;
  z-index: 20;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  @media screen and (max-width: 363px) {
    padding: 10px;
  }
`;

const H1Wrapper = styled.span`
  display: inline-block;
`;

const H1 = styled.h1`
  font-family: ${(props) => props.globalFont};
  color: white;
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  font-size: 100px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow effect */

  @media screen and (max-width: 626px) {
    font-size: 50px;
    padding: 10px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-image: url(${bkgrnd});
  background-size: cover;
  background:black;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

export default function ContactUs() {
  const { GlobalFont } = useGlobals();

  return (
    <>
      <Container>
        <BackgroundImage />
        <H1Wrapper>
          <H1 globalFont={GlobalFont}>Contact Us</H1>
        </H1Wrapper>
      </Container>

      <PageContainer>
        <Accordion/>
        <FormContainer>
          <FormSubmit />
        </FormContainer>
      </PageContainer>

      <FooterWithIcon />
    </>
  );
}
