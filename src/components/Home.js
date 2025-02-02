// src/pages/Home.js
import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import WhySSHP from './WhySSHP';
import Industries from './Industries';

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <WhySSHP />
      <Industries />
    </>
  );
}

export default Home;
