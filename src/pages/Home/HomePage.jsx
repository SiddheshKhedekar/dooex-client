// @flow

import React from 'react';

import NavBar from 'components/NavBar';
import MainPage from 'pages/Main';

function HomePage() {
  return (
    <div>
      <MainPage basepath="/" />
      <NavBar />
    </div>
  );
}

export default HomePage;
