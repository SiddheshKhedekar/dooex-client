// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/Home';
import SavedPage from 'pages/Saved';
import SearchPage from 'pages/Search';

import './App.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/saved" component={SavedPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
