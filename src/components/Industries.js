import React from "react";
import "./Industries.css"; // Add custom CSS for styling

const Industries = () => {
  return (
  <div className='industry-parant'>
      <h1 className="industries-heading">
        <span className="industry-word">INDUSTRIES,</span>
        <span className="we-serve-word"> WE SERVE</span>
      </h1>
    <div className="industries-container">
      <div className="industry-card">
        <img src="/assets/images/Automotive.jpeg" alt="Automotive" />
        <div className="industry-title">AUTOMOTIVE</div>
      </div>
      <div className="industry-card">
        <img src="/assets/images/ElectronicsAndElectricals.jpeg" alt="Electronics & Electrical" />
        <div className="industry-title">ELECTRONICS & ELECTRICAL</div>
      </div>
      <div className="industry-card">
        <img src="/assets/images/HVACIndustryImage.jpg" alt="Aerospace" />
        <div className="industry-title">HVAC Industry </div>
      </div>
      <div className="industry-card">
        <img src="/assets/images/HealthAndAirConditioning.jpeg" alt="Heating, Ventilation & Air-Conditioning" />
        <div className="industry-title">AEROSPACE</div>
      </div>
      <div className="industry-card">
        <img src="/assets/images/nuts.jpeg" alt="Plumbing & Sanitary" />
        <div className="industry-title">PLUMBING & SANITARY</div>
      </div>
      <div className="industry-card">
        <img src="/assets/images/hydraulics-vs-pneumatics-header.jpg" alt="Plumbing & Sanitary" />
        <div className="industry-title">hydraulics-pneumatics</div>
      </div>
    </div>
  </div>
  );
};

export default Industries;
