import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main route for the home page */}
        <Route path="/" element={<Main />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Services page */}
        <Route path="/services" element={<Services />} />

        {/* Blog page */}
        <Route path="/blog" element={<Blog />} />

        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
