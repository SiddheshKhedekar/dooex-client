import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from 'App';

import './index.scss';
import registerServiceWorker from './registerServiceWorker';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
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
