import React, { Component } from 'react';

import Home from 'components/Home';
import TopNav from 'components/TopNav';

import styles from './App.scss';

class App extends Component {
  render() {
    return [<TopNav key="TopNav" />, <Home key="Home" />];
  }
}

export default App;
