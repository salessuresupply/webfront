// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Page components
import Home from './components/Home';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        {/* Home path => renders Home.js, which includes HeroSection, Services, WhySSHP, Industries */}
        <Route path="/" element={<Home />} />

        {/* Contact path => renders ContactUS */}
        <Route path="/contact" element={<ContactUs />} />

        {/* (Optional) Catch-all route => 404 or NotFound */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
