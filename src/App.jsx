// @flow

import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from 'pages/Home';
import SearchPage from 'pages/Search';

import './App.scss';

function App() {
  return (
    <div>
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
    </div>
  );
}

export default App;
