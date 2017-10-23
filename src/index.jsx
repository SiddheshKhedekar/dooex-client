// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import { AppContainer } from 'react-hot-loader';

import App from './App';

import history from 'modules/history';
import store from 'modules/store';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <AppContainer>
          <Route component={Component} />
        </AppContainer>
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
}

render(App);
registerServiceWorker();

if (module.hot) {
  // $FlowFixMe
  module.hot.accept('./App', () => {
    const nextApp = require('./App').default;

    render(nextApp);
  });
}

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');

  whyDidYouUpdate(React, {
    include: /^Doodle$/,
    // exclude: /^.*$/,
  });
}
