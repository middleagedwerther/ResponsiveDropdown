// requires <Parent> in home.js to be replaced with<></>

import bkgrnd from "../../images/amerifence.png";
import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import Navbar from "../Navbar.js";
import FormSubmit from "./FormSubmit.js";

const Container = styled.div`
  position: relative;

`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 1; // Ensures the header is above the background image
`;

const H1 = styled.h1`
  font-family: ${(props) => props.globalFont};
  color: white;
  text-align: left;
  padding-left: 20px;
  font-size: 50px;
  margin: 0;

  @media screen and (max-width: 626px) {
    font-size: 30px;
    padding: 10px;
  }
`;

const H2 = styled.h2`
  font-family: ${(props) => props.globalFont};
  color: white;
  text-align: left;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
  padding-left: 20px;

  @media screen and (max-width: 626px) {
    font-size: 20px;
    padding: 10px;
  }
`;


const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bkgrnd});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8); // Temporary background color for debugging
  z-index: 100; // Ensure it is above the background
`;

const ContentWrapper = styled.div`
  flex: 1; // Allows the content to grow and take the available space
`;


const Container2 = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  background:blue;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const LeftContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: relative;
  grid-column: 2/3;
  border-radius: 5px;
  padding: 5px;
  height: 100%; /* Ensures the container takes up full height */

  @media screen and (max-width: 960px) {
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
    position: static;
    margin: 0;
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns content to the start (top) */
  align-items: flex-start; /* Aligns content to the start (left) */
  height: 100%;
`;



export default function StickyHeader() {
  const { GlobalFont } = useGlobals();

  return (
    <>
      <Container>
          <H1 globalFont={GlobalFont}>This is the header</H1>
          <BackgroundImage />

      </Container>

      <NavWrapper>
          <Navbar/>
          </NavWrapper>

    <Container2>
      <LeftContainer>
        {/* <Row>
          <H1 globalFont={GlobalFont}>High-quality, affordable fencing</H1>
        </Row> */}
        <Row2>
          <H2 globalFont={GlobalFont}>
            Enhance the beauty, security, and privacy of your property with our expert fencing services. With years of experience and a dedication to craftsmanship, we are committed to delivering fences that not only stand the test of time but also add value to your property.
          </H2>
        </Row2>
      </LeftContainer>
      <RightContainer>
        <FormSubmit />
      </RightContainer>
    </Container2>

    </>
  );
}
