import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';

import App from 'App';

import store from 'modules/store';

import './index.scss';
import registerServiceWorker from './registerServiceWorker';

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
}

render(App);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    const nextApp = require('./App').default;

    render(nextApp);
  });
}
