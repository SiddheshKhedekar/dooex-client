// @flow

import React from 'react';

import TopBar from 'components/TopBar';
import MainPage from 'pages/Main';

function HomePage() {
  return [<MainPage basepath="/" key="MainPage" />, <TopBar key="TopBar" />];
}

export default HomePage;
