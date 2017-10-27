// @flow

import React from 'react';

import TopBar from 'components/TopBar';
import MainPage from 'pages/Main';

function HomePage() {
  return (
    <div>
      <MainPage basepath="/" />
      <TopBar />
    </div>
  );
}

export default HomePage;
