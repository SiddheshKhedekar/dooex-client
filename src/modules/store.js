// @flow

import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';

import rootReducer from 'reducers/root-reducer';
import persistSavedDoodles from 'modules/persist-saved-doodles';
import syncLocation from 'modules/sync-location';

const store = createStore(
  rootReducer,
  window.__DOOEX_STATE__,
  applyMiddleware(thunk, persistSavedDoodles, syncLocation),
);

delete window.__DOOEX_STATE__;

export default store;
