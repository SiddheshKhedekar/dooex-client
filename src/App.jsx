import React, { Component } from 'react';

import Home from 'components/Home';
import TopNav from 'components/TopNav';

import styles from './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return [<TopNav />, <Home />];
  }
}

export default App;
