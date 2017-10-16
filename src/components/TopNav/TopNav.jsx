// @flow

import React from 'react';

import styles from './TopNav.scss';

function TopNav() {
  return (
    <nav className={styles.root}>
      <a className="navbar-brand" href="/">
        Fixed
      </a>
    </nav>
  );
}

export default TopNav;
