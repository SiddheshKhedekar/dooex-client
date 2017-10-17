import doodles from 'reducers/doodles';
import meta from 'reducers/meta';

const initialState = {};

function rootReducer(state = initialState, action) {
  const metaState = meta(state.meta, action);
  const doodlesState = doodles(state.doodles, action, metaState);

  const nextState = {
    doodles: doodlesState,
    meta: metaState,
  };

  return nextState;
}

export default rootReducer;
