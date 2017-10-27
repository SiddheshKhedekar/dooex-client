// @flow

import React from 'react';

import NavBar from 'components/NavBar';
import MainPage from 'pages/Main';

function SavedPage() {
  return (
    <div>
      <MainPage basepath="/saved" />
      <NavBar />
    </div>
  );
}

export default SavedPage;
