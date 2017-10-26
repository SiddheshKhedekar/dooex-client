// @flow

import React from 'react';
import Route from 'react-router/Route';

import Main from 'components/Main';
import TopBar from 'components/TopBar';

import AsyncComponent from 'modules/AsyncComponent.jsx';

function InfoModal() {
  return (
    <AsyncComponent load={import(/* webpackChunkName: "InfoModal" */ 'components/InfoModal')} />
  );
}

function FullScreen() {
  return (
    <AsyncComponent load={import(/* webpackChunkName: "FullScreen" */ 'components/FullScreen')} />
  );
}

type Props = {
  basepath: string,
};

function MainPage(props: Props) {
  const { basepath } = props;

  return [
    <Route key="InfoModal" path={`${basepath}info/:doodleId`} component={InfoModal} />,

    <Route key="FullScreen" path={`${basepath}fullscreen/:doodleId`} component={FullScreen} />,

    <TopBar key="TopBar" />,

    <Main key="Main" />,
  ];
}

export default MainPage;
