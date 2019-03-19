import React, { Component } from 'react';
import Header from '../src/components/header';
import MobileMenu from './components/mobile-menu';
const $ = window.$;
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MobileMenu />
        <div id="page">
          <Header />
        </div> 
      </React.Fragment>
    )
  }

  componentDidMount() {
    
  }
}

export default App;
