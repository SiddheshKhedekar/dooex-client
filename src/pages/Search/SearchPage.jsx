// @flow

import React from 'react';
import { Route } from 'react-router';

import InfoModal from 'components/InfoModal';
import FullScreen from 'components/FullScreen';
import Main from 'components/Main';
import SearchBar from 'components/SearchBar';

type Props = {};

function SearchPage(props: Props) {
  return [
    <Route key="InfoModal" path="/search/info/:doodleId" component={InfoModal} />,

    <Route key="FullScreen" path="/search/fullscreen/:doodleId" component={FullScreen} />,

    <SearchBar key="SearchBar" />,

    <Main key="Main" />,
  ];
}

export default SearchPage;
