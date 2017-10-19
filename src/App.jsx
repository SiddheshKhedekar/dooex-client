// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from 'components/Home';
import TopNav from 'components/TopNav';

import './App.scss';

function App() {
  return (
    <div>
      <TopNav />

      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
