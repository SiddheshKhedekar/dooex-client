// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import InfoModal from 'components/InfoModal';
import FullScreen from 'components/FullScreen';
import SearchBar from 'components/SearchBar';

import Main from 'components/Main';

import styles from './SearchPage.css';

type Props = {};

class SearchPage extends Component<Props> {
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

      <SearchBar key="SearchBar" />,

      <Main key="Main" {...this.props} />,
    ];
  }
}

export default SearchPage;
