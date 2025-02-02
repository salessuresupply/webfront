import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/assets/icons/logo.png" alt="Logo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* Sidebar Panel */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          ✖
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-bar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
