import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import IntroSection from './components/intro';
import ServicesSection from './components/services';
import Portfolios from './components/portfolio';
import Contact from './components/contact';

let App=()=>{

  return(
    <React.Fragment>
      <div className='app'>
        <Navbar/>
        <IntroSection/>
        <ServicesSection/>
        <Portfolios/>
        <Contact/>
      </div>
    </React.Fragment>
  )
}

export default App;
