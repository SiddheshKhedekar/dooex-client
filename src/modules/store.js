import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';

import reducer from 'modules/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
