import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from './main';


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={props => <Main {...props}/> } />
      </Router>
    )
  }
}

export default App;
