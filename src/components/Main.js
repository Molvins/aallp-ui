import React from 'react';
import Header from './Header';
import Team from './Team'
import About from './About'
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
      <div className='Team'>
        <Team />    
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;