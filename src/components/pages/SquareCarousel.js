import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import image1 from '../../images/image-daniel.jpg';
import image2 from '../../images/image-jeanette.jpg';
import image3 from '../../images/image-jonathan.jpg';
import image4 from '../../images/image-kira.jpg';

import { useGlobals } from "../../Globals.js"

const SquareCarousel = () => {

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
    maxHeight: '100%', // Adjust height if needed
    maxWidth: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '50%',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    top: '50%',
  };

  const textStyle = {
    fontSize: '15px',
    width: '100%', // Ensure the text takes up the full width
    height: '100%', // Ensure the text takes up the full height
    objectFit: 'cover',
    fontFamily: GlobalFont,
    fontWeight: 'normal',
    textAlign: 'center',
    padding: '20px', // Add padding to prevent text from touching the edges
    boxSizing: 'border-box',
  };

  const H4style = {
    width: '100%',
    gridRow: '3',
    gridColumn: '1 / -1', // Span all columns
    fontSize: '13px',
    textAlign: 'center',
    fontFamily: GlobalFont,
    background: 'grey',
    fontWeight: '100',
    color: 'orange',
    objectFit: 'contain',
    padding: '0',
    boxSizing: 'border-box',
    alignSelf: 'stretch', // Ensure it stretches to fill the row
  };

  const boxStyle = {
    color: 'white',
    display: 'grid',
    gridTemplateRows: '2fr 1fr 0.4fr',
    gridTemplateColumns: '1fr', // Ensure there is only one column
    backgroundColor: PrimaryColour,
    textAlign: 'center',
    margin: '0 10px', // Increase the margin value as desired
    fontFamily: GlobalFont,
    boxSizing: 'border-box',
  };

  const imageBox = {
    position: 'relative',
    height: '100%',
    width: '100%',
  };

  const imageBoxTop = {
    height: '50%',
    backgroundColor: PrimaryColour,
  };

  const imageBoxBottom = {
    height: '50%',
    backgroundColor: 'grey',
  };

  const containerStyle = {
    padding: '10px',
    fontFamily: GlobalFont
  };

  return (
    <div style={containerStyle}>
      <Carousel responsive={responsive}>
        <div style={boxStyle}>
          <div style={textStyle}>
            The fence looks great! The guys did a fantastic job, and you were far and away the most professional company we dealt with in seeking quotes. We’ll definitely be recommending Eastside to anyone who needs fence work done.
          </div>
          <div style={imageBox}>
            <div style={imageBoxTop}></div>
            <div style={imageBoxBottom}></div>
            <img src={image1} alt="Image 1" style={imageStyle} />
          </div>
          <div style={H4style}>
            Mark F, Blackburn
          </div>
        </div>

        <div style={boxStyle}>
          <div style={textStyle}>
          The fence between our neighbour and ourselves needed replacing and we called for three quotes from local fencing contractors. All quotes received were similar in price but one contractor stomped all over our plants during the inspection and another made us feel that he was doing us a favour just quoting. Luke Eastick however, was friendly and considerate so we decided to go with Eastside Fencing and we are now very pleased with our choice. Luke and his team were friendly and efficient, they protected our plants, any problems encountered were quickly resolved and the completed fence is of a high standard. We have no hesitation in recommending Eastside Fencing to anybody looking for a fencing contractor.
          </div>
          <div style={imageBox}>
            <div style={imageBoxTop}></div>
            <div style={imageBoxBottom}></div>
            <img src={image2} alt="Image 2" style={imageStyle} />
          </div>
          <div style={H4style}>
            Jane T, Mitcham
          </div>
        </div>

        <div style={boxStyle}>
          <div style={textStyle}>
            The fence looks great! The guys did a fantastic job, and you were far and away the most professional company we dealt with in seeking quotes. We’ll definitely be recommending Eastside to anyone who needs fence work done.
          </div>
          <div style={imageBox}>
            <div style={imageBoxTop}></div>
            <div style={imageBoxBottom}></div>
            <img src={image3} alt="Image 3" style={imageStyle} />
          </div>
          <div style={H4style}>
            Mark F, Blackburn
          </div>
        </div>
        
        <div style={boxStyle}>
          <div style={textStyle}>
            The fence looks great! The guys did a fantastic job, and you were far and away the most professional company we dealt with in seeking quotes. We’ll definitely be recommending Eastside to anyone who needs fence work done.
          </div>
          <div style={imageBox}>
            <div style={imageBoxTop}></div>
            <div style={imageBoxBottom}></div>
            <img src={image4} alt="Image 4" style={imageStyle} />
          </div>
          <div style={H4style}>
            Mark F, Blackburn
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SquareCarousel;
