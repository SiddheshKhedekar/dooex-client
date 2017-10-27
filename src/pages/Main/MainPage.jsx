// @flow

import React from 'react';
import Route from 'react-router/Route';

import FullScreen from 'components/FullScreen';
import InfoModal from 'components/InfoModal';
import Main from 'components/Main';
import NavBar from 'components/NavBar';

type Props = {
  basepath: string,
};

function withTrailingSlash(s: string) {
  return s.endsWith('/') ? s : `${s}/`;
}

function MainPage(props: Props) {
  const basepath = withTrailingSlash(props.basepath);

  return (
    <div>
      <Route path={`${basepath}info/:doodleId`} component={InfoModal} />

      <Route path={`${basepath}fullscreen/:doodleId`} component={FullScreen} />

      <Main />
    </div>
  );
}

export default MainPage;
