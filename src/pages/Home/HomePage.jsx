// @flow

import React from 'react';
import { Route } from 'react-router-dom';

import InfoModal from 'components/InfoModal';
import FullScreen from 'components/FullScreen';
import TopBar from 'components/TopBar';

import Main from 'components/Main';

type Props = {};

function HomePage(props: Props) {
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

    <Main key="Main" {...props} />,
  ];
}

export default HomePage;
