import React, { Component } from 'react';
import Header from '../src/components/header';
import MobileMenu from './components/mobile-menu';
import Slider from './components/slider';
import Salon from './components/salon';
const $ = window.$;
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MobileMenu />
        <div id="page">
          <Header />
          <Slider />
          <Salon />
        </div> 
      </React.Fragment>
    )
  }

  componentDidMount() {
    
  }
}

export default App;
