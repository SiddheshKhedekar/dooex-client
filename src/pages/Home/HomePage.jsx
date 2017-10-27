// @flow

import React from 'react';

import TopBar from 'components/TopBar';
import MainPage from 'pages/Main';

function HomePage() {
  return (
    <div>
      <MainPage basepath="/" key="MainPage" />
      <TopBar key="TopBar" />
    </div>
  );
}

export default HomePage;
