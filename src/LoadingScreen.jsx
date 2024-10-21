import React from 'react';
import duckyImage from './ducky.png'; // Ensure the path is correct

const NUM_IMAGES = 25;

function LoadingScreen() {
  const images = Array.from({ length: NUM_IMAGES }, (_, index) => index);

  return (
    <div className="loading-screen">
      <div className="animation-container">
        {images.map((_, index) => (
          <img
            key={index}
            src={duckyImage}
            alt={`Ducky ${index + 1}`}
            className="animated-image"
            style={{
              left: `${Math.floor(Math.random() * 100) - 52}vw`,
              animationDelay: `${index * 0.125}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;
