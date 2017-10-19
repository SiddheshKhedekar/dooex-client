import doodles from 'reducers/doodles';
import meta from 'reducers/meta';
import search from 'reducers/search';

const initialState = {};

function rootReducer(state = initialState, action) {
  const metaState = meta(state.meta, action);
  const doodlesState = doodles(state.doodles, action, metaState);

  const searchState = search(state.search, action);

  const nextState = {
    doodles: doodlesState,
    meta: metaState,
    search: searchState,
  };

  return nextState;
}

export default rootReducer;
