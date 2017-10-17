// @flow

import React from 'react';

import styles from './TopNav.scss';

function shareApp() {
  navigator.share({
    title: 'DooEx',
    text: 'DooEx\nGoogle Doodles Explorer\n\n',
    url: 'https://10.42.0.1:3000/',
  });
}

function ShareButton() {
  if (navigator.share === undefined) {
    return null;
  }

  return (
    <button className={styles.action} onClick={shareApp}>
      <span className="fa fa-fw fa-share-alt" />
    </button>
  );
}

function TopNav() {
  return (
    <nav className={styles.root}>
      <a className="navbar-brand" href="/">
        Fixed
      </a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <button className={styles.action}>
            <span className="fa fa-fw fa-search" />
          </button>
        </li>

        {/* last item */}
        <li className="nav-item">
          <ShareButton />
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
