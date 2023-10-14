import React, { useState } from 'react';
import './header.css'
import ME from '../../assets/images/brandon-mountain.png'
import ME_HOVER from "../../assets/images/brandon-mountain.png"

function ImageSwitcher() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <img src= { ME_HOVER } alt="Me with studio light on top of EEOR" />
      ) : (
        <img src= { ME } alt="Me on top of EEOR" />
      )}
    </div>
  );
}

export default ImageSwitcher;
