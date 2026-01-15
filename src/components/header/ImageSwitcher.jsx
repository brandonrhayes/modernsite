import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import ME1 from "../../assets/images/Brandon_Mountain_Transparent.png";
import ME2 from "../../assets/images/Brandon On Site Clear BG.png";

function ImageSwitcher() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(1); // Start with ME2 (index 1)
  const intervalRef = useRef(null);

  const images = [
    { src: ME1, alt: "Me on top of EEOR" },
    { src: ME2, alt: "Brandon on site" },
  ];

  // Auto-rotation every 4 seconds
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev === 0 ? 1 : 0));
      }, 4000); // 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Pause auto-rotation and switch to the other image on hover
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentImage((prev) => (prev === 0 ? 1 : 0));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Resume auto-rotation when mouse leaves
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
    // Reset the interval when manually switching
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`header-image ${index === currentImage ? "active" : ""} ${
            isHovered ? "hovered" : ""
          }`}
        />
      ))}

      {/* Indicator dots */}
      <div className="header-image-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`header-image-indicator ${
              index === currentImage ? "active" : ""
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSwitcher;
