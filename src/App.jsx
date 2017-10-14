import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import Doodle from './Doodle';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div id="row" className={styles.row}>
            <Doodle />
            <Doodle />
            <Doodle />
            <Doodle />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
