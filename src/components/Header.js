import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
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
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setMenuOpen(false)}  // Optionally close menu on click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/aboutus" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contactus" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/aboutus" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contactus" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
