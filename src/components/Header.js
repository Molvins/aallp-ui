import React from "react";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <img src="/path-to-your-logo/logo.png" alt="Auka & Associates" />
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#team">Team</a>
        <a href="#blog">Blog</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
        />
        <button type="submit">Search</button>
      </div>
    </header>
  );
};

export default Header;
