import React from "react";
import {
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,
  FaNewspaper,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="social-icons">
          <div className="eco-icon">
            <FaHome /> Auka & Associates LLP
          </div>
          <div className="social-links">
            <FaFacebook />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
          </div>
          <div className="contact-button">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <ul className="footer-list">
          <li className="Nav">Navigation</li>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaBuilding /> Our Company
            </Link>
          </li>
          <li>
            <FaMapMarkerAlt /> Location
          </li>
          <li>
            <Link to="/blog">
              <FaNewspaper /> Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <ul className="footer-list">
          <li className="Nav">Company</li>
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Our Team</li>
        </ul>
      </div>
      <div className="footer-section">
        <ul className="footer-list">
          <li className="Nav">Support</li>
          <li>+254710203050</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
