import { useState } from "react";

const slideStyles = {
  width: "95%",
  height: "95%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "transparent",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "15px",
  fontSize: "45px",
  color: "#333",
  zIndex: 1,
  transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
  cursor: "pointer",
  borderRadius: "5px",
  background: "rgba(255, 255, 255, 0.5)",
  
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "-1px",
  fontSize: "45px",
  color: "#1E1E1E",
  transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
  zIndex: 1,
  cursor: "pointer",
  background: "rgba(255, 255, 255, 0.5)",
  borderRadius: "5px",
  
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "transparent",
};

const dotStyle = {
  margin: "0px 3px 3px 3px",
  cursor: "pointer",
  fontSize: "20px",
   color: "#fff",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
        &lt;
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
        &gt;
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
