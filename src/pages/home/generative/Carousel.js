import React, { useState } from "react";
import "./Generative.css";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const previousImage = () => {
    const previousIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(previousIndex);
  };

  return (
    <div className="image-slider">
      <div className="image-slider__wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            className={`image-slider__image ${
              currentImageIndex === index ? "active" : ""
            }`}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
      <div className="image-slider__buttons">
        <button className="image-slider__button" onClick={previousImage}>
          &lt;
        </button>
        <button className="image-slider__button" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
