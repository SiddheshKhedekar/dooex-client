// @flow

import React from 'react';
import { Route } from 'react-router';

import InfoModal from 'components/InfoModal';
import FullScreen from 'components/FullScreen';
import Main from 'components/Main';
import TopBar from 'components/TopBar';

type Props = {};

function SavedPage(props: Props) {
  return [
    <Route key="InfoModal" path="/saved/info/:doodleId" component={InfoModal} />,

    <Route key="FullScreen" path="/saved/fullscreen/:doodleId" component={FullScreen} />,

    <TopBar key="TopBar" />,

    <Main key="Main" />,
  ];
}

export default SavedPage;
