// @flow

import React from 'react';

import SearchBar from 'components/SearchBar';
import MainPage from 'pages/Main';

function SearchPage() {
  return [<MainPage basepath="/search" key="MainPage" />, <SearchBar key="SearchBar" />];
}

export default SearchPage;
