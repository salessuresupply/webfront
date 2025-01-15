import React, { useState } from 'react';
import './WhySSHP.css'; // Assume you add the CSS here for styling

const WhySSHP = () => {
  const [isBuyer, setIsBuyer] = useState(true);

  const buyerCards = [
    { icon: 'Asset6.png', title: 'Your trusted partner', description: 'Count on us for unmatched reliability—lowest rates, on-time delivery, quality products, and flexible payment terms. We’re the platform buyer’s trust' },
    { icon: 'Asset7.png', title: 'Dedicated Relationship Manager', description: 'We ensure fast, efficient, and personalized support, streamlining the procurement process' },
    { icon: 'Asset8.png', title: 'Simplified Procurement', description: 'We handle supplier management and procurement hassles. One contact, seamless execution, and aligned strategies—effortless for you!' },
    { icon: 'Asset9.png', title: 'Lowest Cost Guaranteed', description: 'Direct sourcing from original parts manufacturers. We remove supply chain layers to deliver the best rates for your requirements.' },
    { icon: 'Asset11.png', title: 'Trusted Supplier Network', description: 'We rigorously vet suppliers during onboarding and periodically refresh their data to validate capabilities. This ensures better product quality, timely delivery, and optimized procurement costs' },
  ];

  const supplierCards = [
    { icon: 'Asset11.png', title: 'Continuous Business Opportunities ', description: 'Description for Supplier Card 1' },
    { icon: 'Asset12.png', title: 'Hassle Free Buyer Acquisition', description: 'Description for Supplier Card 2' },
    { icon: 'Asset13.png', title: 'No Subscription fees', description: 'Description for Supplier Card 3' },
    { icon: 'Asset14.png', title: 'Timely Payments', description: 'Description for Supplier Card 4' },
    { icon: 'Asset15.png', title: 'End -to- End support', description: 'Description for Supplier Card 5' },
  ];

  const cards = isBuyer ? buyerCards : supplierCards;

  return (
    <div className="app-container">
      <h2 className="heading">Welcome to Our Platform</h2>
      <p className="tagline">Empowering Buyers and Suppliers</p>
      <button className="toggle-button" onClick={() => setIsBuyer(!isBuyer)}>
        Toggle to {isBuyer ? 'Supplier' : 'Buyer'}
      </button>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={`/assets/icons/${card.icon}`} alt={card.title} className="card-icon" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySSHP;
