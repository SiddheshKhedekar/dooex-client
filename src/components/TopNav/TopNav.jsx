import React, { Component } from 'react';

import styles from './TopNav.scss';

class TopNav extends Component {
  render() {
    return (
      <nav className={styles.root}>
        <a className="navbar-brand" href="#">
          Fixed
        </a>
      </nav>
    );
  }
}

export default TopNav;
