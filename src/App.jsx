import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import Doodle from './Doodle';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return [
      <nav className={styles.nav}>
        <a className="navbar-brand" href="#">
          Fixed
        </a>
      </nav>,

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div id="row" className={styles.row}>
            <div className="col-12">
              <Doodle />
              <Doodle />
              <Doodle />
              <Doodle />
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}

export default App;
