import React from 'react';
import Header from './Header';

import About from './About'

import Contact from './Contact';
import Footer from './Footer';



const Main = () => {
  return(
    <div>
      <div className="app-container">
      <Header />
      </div>
      <div className='AboutU'>
        <About />
      </div>

      <div className='Contact'>
      <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;