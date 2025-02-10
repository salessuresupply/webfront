import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <picture>
        {/* For mobile devices (viewport width 767px and below) */}
        <source
          media="(max-width: 767px)"
          srcSet="/assets/images/homebannerMobile.png"
        />
        {/* Fallback image for larger devices */}
        <img
          className="hero-image"
          src="/assets/images/homebanner.jpeg"
          alt="Manufacturing Services"
        />
      </picture>

      {/* Gradient overlay */}
      <div className="hero-overlay"></div>

      {/* Text content */}
      <div className="hero-content">
        {/* <h1>B2B PLATFORM</h1> */}
        {/* <p>For manufacturing services of precision metal components</p> */}
      </div>
    </section>
  );
}

export default HeroSection;
