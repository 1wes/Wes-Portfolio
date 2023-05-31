import React from 'react';
import Navbar from './components/navbar';
import IntroSection from './components/intro';
import './App.css';
import ServicesSection from './components/services';

let App=()=>{

  return(
    <React.Fragment>
      <div className='app'>
        <Navbar/>
        <IntroSection/>
        <ServicesSection/>
      </div>
    </React.Fragment>
  )
}

export default App;
