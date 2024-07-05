//https://www.npmjs.com/package/react-multi-carousel

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import image1 from '../../images/image-daniel.jpg';
import image2 from '../../images/image-jeanette.jpg';
import image3 from '../../images/image-jonathan.jpg';
import image4 from '../../images/image-kira.jpg';

import { useGlobals } from "../../Globals.js"

const ResponsiveCarousel = () => {

  const { GlobalFont, setGlobalFont, PrimaryColour, setPrimaryColour,
    SecondaryColour, setSecondaryColour, TertiaryColour, setTertiaryColour } = useGlobals();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const imageStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto',
    borderRadius: '50%',
  };

  const textStyle = {
    fontSize: '15px',
    maxWidth: '100%',
    objectFit: 'contain',
    fontFamily: GlobalFont,
    fontWeight: 'normal',
  };

  const H4style = {
    fontSize:"13px",
    textAlign: 'center',
    fontFamily: GlobalFont,
    fontWeight:"100",
  };

  const boxStyle = {
    color: 'white',
    backgroundColor: PrimaryColour,
    padding: '10px',
    textAlign: 'center',
    margin: '0 10px', // Increase the margin value as desired
    borderRadius: '10px',
    textAlign: 'left',
    fontFamily: GlobalFont
  };

  const containerStyle = {
    padding: '10px',
    fontFamily: GlobalFont
  };

  return (
    <div style={containerStyle}>
      <Carousel responsive={responsive}>
        <div style={boxStyle}>
          <img src={image1} alt="Image 1" style={imageStyle} />
          <h3 style={textStyle}><br />The fence looks great! The guys did a fantastic job, and you were far and away the most professional company we dealt with in seeking quotes. We’ll definitely be recommending Eastside to anyone who needs fence work done.</h3>
          <br />
          <h4 style={H4style}>Mark F, Blackburn</h4>
        </div>
        <div style={boxStyle}>
          <img src={image2} alt="Image 2" style={imageStyle} />
          <h3 style={textStyle}>The fence between our neighbour and ourselves needed replacing and we called for three quotes from local fencing contractors. All quotes received were similar in price but one contractor stomped all over our plants during the inspection and another made us feel that he was doing us a favour just quoting.Luke Eastick however, was friendly and considerate so we decided to go with Eastside Fencing and we are now very pleased with our choice. Luke and his team were friendly and efficient, they protected our plants, any problems encountered were quickly resolved and the completed fence is of a high standard.We have no hesitation in recommending Eastside Fencing to anybody looking for a fencing contractor.</h3>
          <h4 style={H4style}>Mary B, Box Hill</h4>
        </div>
        <div style={boxStyle}>
          <img src={image3} alt="Image 3" style={imageStyle} />
          <h3 style={textStyle}>This is the best.</h3>
          <h4 style={H4style}>Mark F, Blackburn</h4>
        </div>
        <div style={boxStyle}>
          <img src={image4} alt="Image 4" style={imageStyle} />
          <h3 style={textStyle}>This is the best.</h3>
          <h4 style={H4style}>Mark F, Blackburn</h4>
        </div>
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
