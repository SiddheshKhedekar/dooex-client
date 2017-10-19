// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from 'pages/Home';

import './App.scss';

function App() {
  return (
    <div>
      <Route path="/" component={HomePage} />
    </div>
  );
}

export default App;
