// @flow

import React from 'react';
import Route from 'react-router/Route';
import Switch from 'react-router/Switch';

import AsyncComponent from 'modules/AsyncComponent.jsx';

function HomePage() {
  return <AsyncComponent load={import(/* webpackChunkName: "HomePage" */ 'pages/Home')} />;
}

function SavedPage() {
  return <AsyncComponent load={import(/* webpackChunkName: "SavedPage" */ 'pages/Saved')} />;
}

function SearchPage() {
  return <AsyncComponent load={import(/* webpackChunkName: "SearchPage" */ 'pages/Search')} />;
}

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
