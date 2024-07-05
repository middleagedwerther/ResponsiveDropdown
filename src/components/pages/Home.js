import React from 'react';
import '../../App.css';
import FormSubmit from './FormSubmit';
import styled from 'styled-components';
import bkgrnd from "../../images/amerifence.png";
import WoodenFence from "../../images/woodenfence.png";
import Aluminium from "../../images/alunimiumfence.png";
import Iron from "../../images/ironfence.jpg";
import Zaun from "../../images/zaun.jpg"; // Corrected the import path

import { Link } from 'react-router-dom';
import Footer2 from './Footer2';
import QuoteCarousel from './QuoteCarousel.js';
import { useGlobals } from "../../Globals.js";
import Accordion from './SitePointAccordion.js';
import PixGrid from './PixelGrid.js';
import Header from './Header.js';
import StickyHeader from './StickyHeader.js';
import DotPointHero from './DotPointHero.js';
import WhoAreWe from './WhoAreWe.js';
import ServicesSection from './ServicesSection.js';
import FourServices from './FourServices.js';
import HeaderWithButton from './HeaderWithButton.js';
import FooterWithIcon from './FooterWithIcon.js';
import FooterWithColumns from "./FooterWithColumns.js"

const Container = styled.h1`
  position: relative;
  max-width: 100%;
  background: red;
`;

const HeaderWrapper = styled.div`
  margin: -100px;
  padding: 0;
`;

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  padding: 20px;
  background-color: grey;
  border-radius: 5px;
  margin-right: 20px;
  margin-top: 70px;

  @media screen and (max-width: 626px) {
    width: 100%;
    position: static;
    margin: 0;
    padding: 10px;
  }
`;

const BkgrndContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw; /* Ensure full viewport width */
  height: 100vh; /* Ensure full viewport height */
  background-image: url(${bkgrnd});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Place it behind other elements */
`;

const H1 = styled.h1`
  font-family: ${props => props.globalFont};
  position: absolute;
  top: 10%;
  left: 0;
  color: white;
  text-align: left;
  padding: 20px;
  font-size: 50px;

  @media screen and (max-width: 626px) {
    font-size: 30px;
    padding: 10px;
  }
`;

const H2 = styled.h2`
  font-family: ${props => props.globalFont};
  position: absolute;
  top: 30%;
  left: 0;
  color: white;
  width: 65%;
  text-align: left;
  padding: 20px;
  font-size: 30px;
  font-weight: 50;
  letter-spacing: 2px;

  @media screen and (max-width: 626px) {
    font-size: 20px;
    width: 100%;
    padding: 10px;
  }
`;

const Parent = styled.div`
  margin-top: 60px;
  width: 100%;
  position: relative;
  overflow: hidden; /* Ensure content stays within the viewport */
  background: #f7f7f7;
`;

const GridContainer = styled.div`
  top: 0;
  left: 0;
  opacity: 0.2;
  position: relative;
  z-index: 999;
`;

const ServicesContainer = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;

  @media screen and (max-width: 626px) {
    grid-template-columns: 1fr;
  }
`;

const WhyChooseUsGrid = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 626px) {
    grid-template-columns: 1fr;
  }
`;

const AboutUsCell = styled.div`
  width: 100%;

  img {
    max-width: 100%; /* Ensures the image doesn't overflow its container */
    display: block; /* Ensures the image behaves like a block element */
    border-radius: 5px; /* Optional: Adds rounded corners to the image */
  }
`;

const Separator = styled.div`
  width: 70%;
  height: 1px;
  background-color: black;
  margin: 0 auto;
  margin-top: 0;

  @media screen and (max-width: 626px) {
    width: 90%;
  }
`;

const ImageBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  border-radius: 5px;
`;

const TestimonialsContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.background || 'transparent'};
`;

const TestimonialsGrid = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;

  @media screen and (max-width: 626px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 5px;
  color: black;
  border: 1px solid black;
`;

const ImageBox = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 5px;

  ${ImageBoxWrapper}:hover & {
    transform: scale(1.02);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  border-radius: 5px;
  transition: transform 0.3s ease;

  ${ImageBoxWrapper}:hover & {
    transform: scale(1.02);
    background-color: rgba(0, 0, 0, 0);
  }
`;

const WhyChooseUsContainer = styled.div`
  position: relative;
  background: ${props => props.background || '#eaf8f9'};
  margin-top: 0;
  padding: 20px;
`;

const OurServicesContainer = styled.div`
  background-color: ${props => props.background || 'transparent'};
  padding: 20px;
`;

const SectionHeading = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0;
  text-align: center;
  font-size: 30px;
  color: orange;
  margin-bottom: 0;
  font-family: ${props => props.globalFont};
`;

const OurServices = ({ globalFont, background }) => (
  <OurServicesContainer background={background}>
    <SectionHeading globalFont={globalFont}>Our Services</SectionHeading>
    <ServicesContainer>
      <ImageBoxWrapper>
        <StyledLink to="/services">
          <Overlay />
          <ImageBox src={WoodenFence} />
        </StyledLink>
      </ImageBoxWrapper>
      <ImageBoxWrapper>
        <StyledLink to="/marketing">
          <ImageBox src={Aluminium} />
          <Overlay />
        </StyledLink>
      </ImageBoxWrapper>
      <ImageBoxWrapper>
        <StyledLink to="/services">
          <ImageBox src={Iron} />
          <Overlay />
        </StyledLink>
      </ImageBoxWrapper>
    </ServicesContainer>
  </OurServicesContainer>
);

const WhyChooseUs = ({ globalFont, background }) => (
  <WhyChooseUsContainer background={background}>
    <SectionHeading globalFont={globalFont}>Who Are We?</SectionHeading>
    <WhyChooseUsGrid>
      <AboutUsCell>
        <img src={Zaun} alt="Zaun" style={{ maxWidth: '100%', height: 'auto' }} />
      </AboutUsCell>
      <AboutUsCell>
        <p>blah blah blah</p>
      </AboutUsCell>
    </WhyChooseUsGrid>
  </WhyChooseUsContainer>
);

const StyledLink = styled(Link)``;

const Testimonials = ({ globalFont, background }) => (
  <TestimonialsContainer background={background}>
    <SectionHeading globalFont={globalFont}>
      Here's What People Are Saying About Us
    </SectionHeading>
    <QuoteCarousel />
  </TestimonialsContainer>
);

export default function Home() {
  const { GlobalFont } = useGlobals();

  const ColorA = "#f7f7f7";

  return (
    <Parent>
      <Header/>
      <WhyChooseUs globalFont={GlobalFont} background={ColorA} />
      <Separator />
      <FourServices />
      <Separator />
      <Testimonials globalFont={GlobalFont} background={ColorA} />
      <Separator />
      <Accordion />
      <FooterWithColumns />
    </Parent>
  );
}
