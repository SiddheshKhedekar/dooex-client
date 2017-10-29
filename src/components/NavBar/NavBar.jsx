// @flow

import React from 'react';
import Link from 'react-router-dom/Link';
import NavLink from 'react-router-dom/NavLink';

import AppInstall from 'components/AppInstall';

import detectMobileBrowser from 'modules/detect-mobile-browser';
import { getInstallPrompt, resetInstallPrompt } from 'modules/app-install';

import styles from './NavBar.css';

const isMobileBrowser = detectMobileBrowser();

function promptAppInstall() {
  const installPrompt = getInstallPrompt();

  if (installPrompt === null) {
    AppInstall();
    return;
  }

  installPrompt.prompt();

  installPrompt.userChoice.then((choiceResult) => {
    console.log(choiceResult.outcome);

    if (choiceResult.outcome === 'dismissed') {
      console.log('User cancelled home screen install');
    } else {
      console.log('User added to home screen');
    }

    resetInstallPrompt();
  });
}

function shareApp() {
  navigator.share({
    title: 'DooEx',
    text: 'DooEx\nGoogle Doodles Explorer\n\n',
    url: 'https://10.42.0.1:3000/',
  });
}

function InstallButton() {
  if (isMobileBrowser === false || window.BeforeInstallPromptEvent === undefined) {
    return null;
  }

  return (
    <button className={styles.action} onClick={promptAppInstall}>
      <span className="fa fa-fw fa-download" />
    </button>
  );
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

function NavBar() {
  return (
    <nav className={styles.root}>
      <Link className="navbar-brand" to="/">
        DooEx
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={styles.action} to="/search" activeClassName="active">
            <span className="fa fa-fw fa-search" />
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={styles.action} to="/saved" activeClassName="active">
            <span className="fa fa-fw fa-star" />
          </NavLink>
        </li>

        <li className="nav-item">
          <InstallButton />
        </li>

        <li className="nav-item">
          <ShareButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
