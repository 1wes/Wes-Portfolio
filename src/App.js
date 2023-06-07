import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import IntroSection from './components/intro';
import ServicesSection from './components/services';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

let App=()=>{

  return(
    <React.Fragment>
      <div className='app'>
        <Navbar/>
        <IntroSection/>
        <ServicesSection/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default App;
