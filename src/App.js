// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Footer from './components/Footer';
import WhySSHP from './components/WhySSHP';
import Industries from './components/Industries';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <WhySSHP />
      <Industries />
      <Footer />
    </div>
  );
}

export default App;
