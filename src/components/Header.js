import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.PNG";


const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <div className="nav-link dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              Services
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/services#corporate-law" className="dropdown-item">Corporate Law</Link>
                <Link to="/services#family-law" className="dropdown-item">Family Law</Link>
                <Link to="/services#estate-planning" className="dropdown-item">Estate Planning</Link>
              </div>
            )}
          </div>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
