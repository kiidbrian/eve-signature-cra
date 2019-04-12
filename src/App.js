import React, { Component } from 'react';
import Header from '../src/components/header';
import MobileMenu from './components/mobile-menu';
import Slider from './components/slider';
import Salon from './components/salon';
import Services from './components/services';
import Contact from './components/contact';
import Appointment from './components/appointment';
import Ourteam from './components/team';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MobileMenu />
        <div id="page">
          <Header />
          <Slider />
          <Ourteam />
          {/*<Salon />*/}
          <Services />
          <Appointment />
          <Contact />
          <a href="index.html#" className="scrollup">Top</a>
        </div> 
      </React.Fragment>
    )
  }

  componentDidMount() {
    
  }
}

export default App;
