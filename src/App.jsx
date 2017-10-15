import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from 'components/Home';
import TopNav from 'components/TopNav';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />

        <Route path="/" component={Home} />
      </div>
    );
  }
}

export default App;
