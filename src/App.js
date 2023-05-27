import React from 'react';
import Navbar from './components/navbar';
import IntroSection from './components/intro';

class App extends React.Component{

  render(){

    return(
      <React.Fragment>
        <div className='app'>
          <Navbar/>
          <IntroSection/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
