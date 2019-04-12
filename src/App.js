import React, { Component } from 'react';
import Header from '../src/components/header';
import MobileMenu from './components/mobile-menu';
import Slider from './components/slider';
import Salon from './components/salon';
import Services from './components/services';
import Contact from './components/contact';
import Appointment from './components/appointment';
import Ourteam from './components/team';
const $ = window.$;

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
    // $.getScript(process.env.PUBLIC_URL + 'js/revoluation/jquery.themepunch.tools.min.js');
    // $.getScript(process.env.PUBLIC_URL + 'js/revoluation/jquery.themepunch.revolution.min.js');

    // $.getScript(process.env.PUBLIC_URL + 'js/revoluation/revolution.extension.layeranimation.min.js');
    // $.getScript(process.env.PUBLIC_URL + 'js/revoluation/revolution.extension.migration.min.js');
    // $.getScript(process.env.PUBLIC_URL + 'js/revoluation/revolution.extension.navigation.min.js');
    // $.getScript(process.env.PUBLIC_URL + 'js/revoluation/revolution.extension.parallax.min.js');
    // $.getScript(process.env.PUBLIC_URL + 'js/revoluation/revolution.extension.slideanims.min.js');
    // $.getScript(process.env.PUBLIC_URL + 'js/revoluation/revoluationfunction.js');
  }
}

export default App;
