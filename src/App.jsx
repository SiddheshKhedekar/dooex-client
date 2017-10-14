import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import Home from './components/Home';
import TopNav from './components/TopNav';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return [<TopNav />, <Home />];
  }
}

export default App;
