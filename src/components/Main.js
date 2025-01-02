import React from 'react';
import Header from './Header';
import Services from './Services';
import About from './About'
import Blog from './Blog';
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