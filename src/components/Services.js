import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Services.css';

function Services() {
  const services = [
    { title: 'A Reliable Platform', description: 'To source precision metal parts from a curated group of invited suppliers.', icon: '/assets/icons/Asset1.png' },
    { title: 'Customizable Sourcing', description: 'Options tailored to your specific needs, with the ability to meet regulatory standards.', icon: '/assets/icons/Asset2.png' },
    { title: 'Dedicated Relationship Manager', description: 'Support from experts aligned with your needs.', icon: '/assets/icons/Asset3.png' },
    { title: 'Flexibility to Choose Supplier Groups', description: 'Align with your regulatory and quality requirements.', icon: '/assets/icons/Asset4.png' },
    { title: 'Assured, Uninterrupted Supply', description: 'High-quality, affordable parts delivered on time.', icon: '/assets/icons/Asset5.png' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p>Delivering value to our buyers and suppliers</p>
      <p>We aggregate buyer demand and ensure efficient manufacturing through our trusted supplier network. By managing the entire process—from order allocation to production—we guarantee quality, timely delivery, and a seamless experience for both buyers and suppliers.</p>

      {/* Grid View for Larger Screens */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Carousel for Mobile Screens */}
      <div className="services-carousel">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Services;
