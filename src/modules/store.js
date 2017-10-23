import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';

import rootReducer from 'reducers/root-reducer';
import persistSavedDoodles from 'modules/persist-saved-doodles';
import syncLocation from 'modules/sync-location';

const store = createStore(rootReducer, applyMiddleware(thunk, persistSavedDoodles, syncLocation));

export default store;
