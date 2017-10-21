// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import App from './App';

import store from 'modules/store';

import './index.scss';
import registerServiceWorker from './registerServiceWorker';

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Route component={Component} />
        </AppContainer>
      </BrowserRouter>
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
