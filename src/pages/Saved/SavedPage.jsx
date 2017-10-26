// @flow

import React from 'react';

import TopBar from 'components/TopBar';
import MainPage from 'pages/Main';

function SavedPage() {
  return [<MainPage basepath="/saved" key="MainPage" />, <TopBar key="TopBar" />];
}

export default SavedPage;
