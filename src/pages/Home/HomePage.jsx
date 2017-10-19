// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import InfoModal from 'components/InfoModal';
import FullScreen from 'components/FullScreen';
import TopBar from 'components/TopBar';

import Home from 'components/Home';

import styles from './HomePage.css';

type Props = {};

class HomePage extends Component<Props> {
  render() {
    return [
      <Route
        key="InfoModal"
        path="/info/:doodleId"
        render={routeProps => <InfoModal {...routeProps} isModal />}
      />,

      <Route
        key="FullScreen"
        path="/fullscreen/:doodleId"
        render={routeProps => <FullScreen {...routeProps} isModal />}
      />,

      <TopBar key="TopBar" />,

      <Home key="Home" {...this.props} />,
    ];
  }
}

export default HomePage;
