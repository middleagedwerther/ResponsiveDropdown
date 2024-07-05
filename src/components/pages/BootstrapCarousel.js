import { useState, useEffect } from "react";
import "./Carousel.css";

import image1 from "../../images/alunimiumfence.png"
import image2 from "../../images/amerifence.png"
import image3 from "../../images/img-1.jpg"
import image4 from "../../images/img-2.jpg"
import image5 from "../../images/img-3.jpg"
import image6 from "../../images/img-4.jpg"
import image7 from "../../images/img-5.jpg"
import image8 from "../../images/img-6.jpg"
import image9 from "../../images/img-7.jpg"


const MultiItemCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 3 - 1;
    } else if (newIndex >= 3) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 10000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <header className="header">
        <h1 className="display-1">Bootstrap Carousel</h1>
      </header>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{
            height: "500px"
          }}
        >
          <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
            <div style={{ display: "flex" }} className="slide-box">
              <img
                src={image1}
                className=""
                alt="1"
              ></img>
              <img
                src={image2}
                className=""
                alt="1"
              ></img>
              <img
                src={image3}
                className=""
                alt="1"
              ></img>
            </div>
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
            <div style={{ display: "flex" }} className="slide-box">
              <img
                src={image4}
                className=""
                alt="2"
              ></img>
              <img
                src={image5}
                className=""
                alt="2"
              ></img>
              <img
                src={image6}
                className=""
                alt="2"
              ></img>
            </div>
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
            <div style={{ display: "flex" }} className="slide-box">
              <img
                src={image7}
                className=""
                alt="3"
              ></img>
              <img
                src={image8}
                className=""
                alt="3"
              ></img>
              <img
                src={image9}
                className=""
                alt="3"
              ></img>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default MultiItemCarousel;
