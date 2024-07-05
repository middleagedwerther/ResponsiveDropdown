import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { useGlobals } from "../../Globals.js";
import Icon from "../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Styled components
const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const IconLink = styled.a`
  color: white;
  font-size: 24px;
  transition: color 0.3s ease;
  &:hover {
    color: #0073b1; /* Change as needed */
  }
`;

const Container = styled.div`
  font-family: ${props => props.globalFont};
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.local};
  padding: 20px;
  display: grid;
  grid-template-columns: auto 2fr 1fr 1fr;
  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SuburbGrid = styled.div`
  background-color: ${props => props.local};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 20px;
  gap: 10px; /* Ensure spacing between items */
`;

const SuburbText = styled.div`
  font-family: ${props => props.globalFont};
  color: white;
  white-space: nowrap;
`;

const ServiceAreas = styled.div`
  background-color: ${props => props.local};
  font-family: ${props => props.globalFont};
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 9px;
  color: white;
`;

const Copyright = styled.div`
  font-family: ${props => props.globalFont};
  background-color: ${props => props.local};
  color: white;
  display: flex;
  font-weight: thin;
  font-size: 15px;
  justify-content: center;
  margin-top: 1.5px;
`;

const Underlined = styled.div`
  font-family: ${props => props.globalFont};
  background-color: ${props => props.local};
  color: white;
  display: flex;
  font-weight: thin;
  font-size: 15px;
  justify-content: center;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  background: black;
`;

const OtherLinks = styled.div`
  font-family: ${props => props.globalFont};
  padding: 5px;
  background-color: ${props => props.local};
  color: blue;
  display: flex;
  font-weight: thin;
  font-size: 15px;
  justify-content: center;
`;

const Divider = styled.span`
  height: 95%;
  width: 1px;
  background-color: white;
  margin: 0 10px;
`;

const ContactButton = styled.div`
  height: 20px;
  color: white;
  width: 50%;
  grid-column: 2;
  grid-row: 1;
  text-decoration: none;
  background-color: orange;
  margin: 0 10px;
  border-radius: 5px;
  margin-top: 12px;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: darkorange;
  }
`;

const TopRow = styled.div`
  text-decoration: none;
  color: white;
  font-family: ${props => props.globalFont};
`;

const Details = styled.div`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
  margin-top:3px;
  padding-left: 20px;
  font-weight: 900;
`;

const PhoneLink = styled.a`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
  margin-bottom:2px;
  padding-left: 20px;
  font-weight: normal;
  &:hover {
    text-decoration: underline;
  }
`;

const EmailLink = styled(Link)`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
  padding-left: 5px;
  font-weight: normal;
  &:hover {
    text-decoration: underline;
  }
`;

const HorizontalDivider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  grid-row: 2;
  grid-column: 1/2;
  height: 1px;
  background-color: white;
  margin: 10px 20px;
  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const ShrunkenDivider = styled.div`
  background-color: black;
  @media screen and (max-width: 670px) {
    display: block;
    width: 100%;
    grid-row: 2;
    grid-column: 1/2;
    height: 1px;
    background-color: white;
    margin: 10px 0 -2px 0;
  }
`;

const HorizontalDivider3 = styled.div`
  width: 50%;
  height: 1px;
  background-color: white;
  margin-top: 0;
  justify-self: center;
`;

const BigVerticalDivider = styled.span`
  height: calc(100% - 4px);
  width: 1px;
  background-color: white;
  color: white;
  margin: 2px 0;
  justify-self: center;
  align-self: center;
  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

const Spant = styled.span`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
  font-weight: normal;
`;

export default function FooterWithColumns() {
  const { GlobalFont, PrimaryColour, SecondaryColour } = useGlobals();
  const [hoveredLink, setHoveredLink] = useState(null);
  const suburbRefs = useRef([]);

  const suburbs = [
    "Box Hill", "Blackburn", "Blackburn North", "Blackburn South",
    "Ringwood", "Mitcham", "Surrey Hills", "Laburnum"
  ];

  const linkStyleWithDecoration = (isHovered) => ({
    color: 'white',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.1s ease',
    textDecoration: 'underline',
  });

  return (
    <>
      <Container PrimaryColour={PrimaryColour} globalFont={GlobalFont} local="black">
        <IconWrapper>
          <img src={Icon} alt="icon" />
        </IconWrapper>
        <LeftContainer>
          <TopRow globalFont={GlobalFont}>
            <ServiceAreas globalFont={GlobalFont}>We service these areas</ServiceAreas>
            <HorizontalDivider />
          </TopRow>
          <SuburbGrid local="black">
            {suburbs.map((suburb, index) => (
              <SuburbText
                key={index}
                ref={el => (suburbRefs.current[index] = el)}
                globalFont={GlobalFont}
              >
                {suburb}
              </SuburbText>
            ))}
          </SuburbGrid>
          <ShrunkenDivider />
        </LeftContainer>

        <MiddleContainer>
          <TopRow globalFont={GlobalFont}>
            <ServiceAreas globalFont={GlobalFont}>
              <Link to='/contact-us' style={{ textDecoration: 'none', color: 'white' }}>
                Contact Us
              </Link>
            </ServiceAreas>
          </TopRow>
          <HorizontalDivider style={{ marginTop: "9.5px" }} />
          <div style={{ gap: '20px', marginLeft: "9px" }}>
            <PhoneLink href="tel:0412123456" globalFont={GlobalFont}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '2px' }} />
              0412 123 456
            </PhoneLink>
            <Details globalFont={GlobalFont}>
              <FontAwesomeIcon icon={faEnvelope} />
              <EmailLink to='/contact-us' globalFont={GlobalFont}>
                queries@fencing.com
              </EmailLink>
            </Details>
            <Details globalFont={GlobalFont}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <Spant globalFont={GlobalFont} style={{ marginLeft: '5px' }}> 123 Fake Rd</Spant>
              <Spant globalFont={GlobalFont} style={{ marginLeft: '100px' }}>  Suburb 3012</Spant>

            </Details>
            <br />
            <Details globalFont={GlobalFont}>
              <FontAwesomeIcon icon={faClock} />
              <Spant globalFont={GlobalFont}> Operating Hours</Spant>
              <div style={{ marginLeft: '25px', marginBottom: "5px" }}>
                <Spant globalFont={GlobalFont}>7am to 7pm</Spant>
              </div>
            </Details>
          </div>
        </MiddleContainer>

        <RightContainer>
          <TopRow globalFont={GlobalFont}>
            <ServiceAreas globalFont={GlobalFont}>Follow Us</ServiceAreas>
          </TopRow>
          <HorizontalDivider />
          <SocialIconsContainer>
            <IconLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </IconLink>
            <IconLink href="https://www.twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </IconLink>
            <IconLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </IconLink>
            <IconLink href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </IconLink>
          </SocialIconsContainer>
        </RightContainer>
      </Container>
      <BottomContainer>
        <HorizontalDivider3 />
        <OtherLinks SecondaryColour={SecondaryColour} local="black">
          <Copyright globalFont={GlobalFont}>
            Copyright © 2024 North East Fencing Pty Ltd.
          </Copyright>
          <Divider />
          <a
            href="https://content.legislation.vic.gov.au/sites/default/files/2021-03/68-7733aa072%20authorised.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyleWithDecoration(hoveredLink === 'fences')}
            onMouseEnter={() => setHoveredLink('fences')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Underlined globalFont={GlobalFont}>Fences Act 1968</Underlined>
          </a>
          <Divider />
          <Link
            to='/privacy'
            style={linkStyleWithDecoration(hoveredLink === 'privacy')}
            onMouseEnter={() => setHoveredLink('privacy')}
            onMouseLeave={() => setHoveredLink(null)}
            globalFont={GlobalFont}
          >
            <Underlined globalFont={GlobalFont}>Privacy Policy</Underlined>
          </Link>
        </OtherLinks>
      </BottomContainer>
    </>
  );
}
