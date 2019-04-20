import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from './main';
import OurWorks from './work';
import Reviews from './reviews';


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={props => <Main {...props}/> } />
        <Route exact path="/works" render={props => <OurWorks {...props}/> } />
        <Route exact path="/reviews" render={props => <Reviews {...props}/> } />
      </Router>
    )
  }
}

export default App;
