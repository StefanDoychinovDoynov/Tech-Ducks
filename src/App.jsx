import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Landing from "./Landing";
import Contact from "./Contact";
import duckyImage from './ducky.png';

const NUM_IMAGES = 25;
const LOADING_DURATION = 3600; // Set a constant loading duration

function LoadingAnimation() {
  const images = Array.from({ length: NUM_IMAGES }, (_, index) => index);
  return (
    <div className="animation-container">
      {images.map((_, index) => (
        <img
          key={index}
          src={duckyImage} // Ensure this path is correct
          alt={`Ducky ${index + 1}`}
          className="animated-image"
          style={{
            left: `${Math.floor(Math.random() * 100) - 52}vw`,
            animationDelay: `${index * 0.06}s`,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true); // Initially true
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, LOADING_DURATION); // Use the constant loading duration
  }, []);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, LOADING_DURATION); // Use the same constant loading duration
  };

  return (
    <div className="app">
      {loading ? (
        <div className="loading-screen">
          <LoadingAnimation />
        </div>
      ) : (
        <Routes>
          <Route path="/Tech-Ducks" element={<Landing onNavigate={handleNavigation} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
