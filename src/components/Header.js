// Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={'/assets/icons/logo.png'} alt="sureSupply Logo" />
      </div>
      <div className="right-section">
        <nav className="nav-bar">
          <ul>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </header>
  );
}

export default Header;
