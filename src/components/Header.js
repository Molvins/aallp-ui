import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    navigate('/services', { state: { service } }); // Pass selected service as state
    setIsDropdownOpen(false); 
  };

  return (
    <header className="header">
      <h1>Auka & Associates</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <div className="dropdown">
          <button
            className="nav-link dropdown-toggle"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            Services
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => handleServiceClick('Corporate Law')}>Corporate Law</button>
              <button onClick={() => handleServiceClick('Family Law')}>Family Law</button>
              <button onClick={() => handleServiceClick('Estate Planning')}>Estate Planning</button>
            </div>
          )}
        </div>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
