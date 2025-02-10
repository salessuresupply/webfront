import React, { useState } from "react";
import "./WhySSHP.css"; // Import your CSS

const WhySSHP = () => {
  const [isBuyer, setIsBuyer] = useState(true);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardTouch = (index) => {
    if (flippedIndex === index) {
      setFlippedIndex(null); // Flip back if the same card is tapped again
    } else {
      setFlippedIndex(index); // Flip the tapped card
    }
  };

  const buyerCards = [
    {
      icon: "Asset66.png",
      title: "Your Trusted Partner",
      description:
        "Count on us for unmatched reliability—lowest rates, on-time delivery, quality products, and flexible payment terms. We’re the platform buyer’s trust",
    },
    {
      icon: "Asset666.png",
      title: "Dedicated Relationship Manager",
      description:
        "We ensure fast, efficient, and personalized support, streamlining the procurement process",
    },
    {
      icon: "Asset88.png",
      title: "Simplified Procurement",
      description:
        "We handle supplier management and procurement hassles. One contact, seamless execution, and aligned strategies—effortless for you!",
    },
    {
      icon: "Asset99.png",
      title: "Lowest Cost Guaranteed",
      description:
        "Direct sourcing from original parts manufacturers. We remove supply chain layers to deliver the best rates for your requirements.",
    },
    {
      icon: "Asset100.png",
      title: "Trusted Supplier Network",
      description:
        "We rigorously vet suppliers during onboarding and periodically refresh their data to validate capabilities. This ensures better product quality, timely delivery, and optimized procurement costs",
    },
  ];

  const supplierCards = [
    { icon: "businessOppo.png", title: "Continuous Business Opportunities", description: "Access to a large network of high-demand buyers from OEMs and top companies, ensuring a steady flow of business." },
    { icon: "hassleFree.png", title: "Hassle-Free Buyer Acquisition", description: "Focus entirely on your production while we seamlessly connect you with trusted buyers—no marketing effort required!" },
    { icon: "noFee.png", title: "No Subscription Fees", description: "Get business at no cost. We don’t charge subscriptions fees—your growth is our only priority!" },
    { icon: "timelyPayment.png", title: "Timely Payments", description: "Your payments are always on time and fully secure with us. Partner with confidence, knowing we prioritize your financial peace of mind." },
    { icon: "endToEndSupport.png", title: "End-to-End Support", description: "We’re with you at every step—from manufacturing to delivery—ensuring seamless order execution." },
  ];

  const cards = isBuyer ? buyerCards : supplierCards;

  return (
    <div className="app-container">
      {/* Header Section */}
      <div className="header-container">
        <div className="header-text">
          <h2 className="heading">Why Suresupply</h2>
          <p className="tagline">Delivering value to our buyers and suppliers</p>
        </div>
        <div className="toggle-container">
          <div className={`toggle-option ${isBuyer ? "active" : ""}`} onClick={() => setIsBuyer(true)}>
            BUYER
          </div>
          <div className={`toggle-option ${!isBuyer ? "active" : ""}`} onClick={() => setIsBuyer(false)}>
            SUPPLIER
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            className={`card ${flippedIndex === index ? "touched" : ""}`}
            key={index}
            onTouchStart={() => handleCardTouch(index)} // Flip on touch
          >
            <div className="card-inner">
              <div className="card-front">
                  <div className="icon-container">
                <img src={`/assets/icons/${card.icon}`} alt={card.title} className="card-icon" />
                  </div>
                  <h3 className="card-title">
  {card.title.split(" ").map((word, idx, arr) => (
    <React.Fragment key={idx}>
      {word}
      {idx < arr.length - 1 && <br />}
    </React.Fragment>
  ))}
</h3>


              </div>
              <div className="card-back">
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySSHP;
