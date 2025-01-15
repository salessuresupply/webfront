import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
      <div className="hero-image">
          <img 
            src="/assets/images/homebanner.jpeg" 
            alt="Manufacturing Services" 
          />
        </div>
        <div className="hero-text">
          <h1>B2B PLATFORM</h1>
          <p>For manufacturing services of precision metal components</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

