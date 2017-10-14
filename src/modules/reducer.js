import { combineReducers } from 'redux';

import doodles from 'modules/doodles/reducer';

const reducer = combineReducers({
  doodles,
});

export default reducer;
