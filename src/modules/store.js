import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';

import rootReducer from 'reducers/root-reducer';
import persistSavedDoodles from 'modules/persist-saved-doodles';

const store = createStore(rootReducer, applyMiddleware(thunk, persistSavedDoodles));

export default store;
