// @flow

import React from 'react';
import Route from 'react-router/Route';

import FullScreen from 'components/FullScreen';
import InfoModal from 'components/InfoModal';
import Main from 'components/Main';
import TopBar from 'components/TopBar';

type Props = {
  basepath: string,
};

function MainPage(props: Props) {
  const { basepath } = props;

  return (
    <div>
      <Route key="InfoModal" path={`${basepath}info/:doodleId`} component={InfoModal} />

      <Route key="FullScreen" path={`${basepath}fullscreen/:doodleId`} component={FullScreen} />

      <TopBar key="TopBar" />

      <Main key="Main" />
    </div>
  );
}

export default MainPage;
