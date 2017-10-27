// @flow

import React from 'react';

import TopBar from 'components/TopBar';
import MainPage from 'pages/Main';

function SavedPage() {
  return (
    <div>
      <MainPage basepath="/saved" />
      <TopBar />
    </div>
  );
}

export default SavedPage;
