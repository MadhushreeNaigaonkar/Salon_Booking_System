import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import "./Crousals.css"; // Import the CSS file
import Slide1 from "../assests/Slide1.jpg";
import Slide2 from "../assests/Slide2.jpg";
import Slide3 from "../assests/Slide3.jpg";

function Crousal() {
  const images = [Slide1, Slide2, Slide3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-arrow" onClick={prevSlide}>
          &#8249;
        </div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <div className="carousel-arrow" onClick={nextSlide}>
          &#8250;
        </div>
      </div>
    </>
  );
}

export default Crousal;
