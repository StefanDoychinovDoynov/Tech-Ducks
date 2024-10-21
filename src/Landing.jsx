import React from "react";
import { Link } from "react-router-dom";
import duckyImage from './ducky.png';
import codeImage from './code.png';

function Landing({ onNavigate }) {
  return (
    <div className="landing-page">
      <header className="Header">
        <img id="Logo" src={duckyImage} alt="Logo" />
        <h1 id="Title">Tech Ducks</h1>
        <nav className="Menu">
          <Link id="WorkButton" to="/">Work</Link>
          <button id="ContactButton" onClick={() => onNavigate('/contact')}>Contact</button>
        </nav>
      </header>
      <div className="first">
        <p id="Phrase">We develop, we design,<br />we don't duck around!</p>
        <div className="demo-code-container">
          <img
            id="DemoCodeImg"
            src={codeImage}
            alt="Demo Code"
            className="demo-code-img"
          />
        </div>
        <p id="TextImg">We build your dreams into reality.</p>
      </div>
    </div>
  );
}

export default Landing;
