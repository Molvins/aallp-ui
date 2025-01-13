import React from "react";
import { FaHome, FaBuilding, FaMapMarkerAlt, FaNewspaper } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <ul className="footer-list">
          <li className="Nav">Navigation</li>
          <li>
            <NavLink to="/" aria-label="Home">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" aria-label="Our Company">
              <FaBuilding /> Our Company
            </NavLink>
          </li>
          <li>
            <FaMapMarkerAlt aria-hidden="true" /> Location
          </li>
          <li>
            <NavLink to="/blog" aria-label="Blog">
              <FaNewspaper /> Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <ul className="footer-list">
          <li className="Nav">Company</li>
          <li>
            <NavLink to="/about" aria-label="About Us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/team" aria-label="Our Team">Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact" aria-label="Contact Us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <ul className="footer-list">
          <li className="Nav">Support</li>
          <li>
            <a href="tel:+254710203050" aria-label="Call Support">
              +254 710 203 050
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
  