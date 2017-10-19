// @flow

import React from 'react';
import { Route } from 'react-router-dom';

import InfoModal from 'components/InfoModal';
import FullScreen from 'components/FullScreen';
import Main from 'components/Main';
import SearchBar from 'components/SearchBar';

type Props = {};

function SearchPage(props: Props) {
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

    <SearchBar key="SearchBar" />,

    <Main key="Main" />,
  ];
}

export default SearchPage;
