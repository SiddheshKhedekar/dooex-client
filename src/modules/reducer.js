import doodles from 'modules/doodles/reducer';
import meta from 'modules/meta/reducer';

const initialState = {};

function reducer(state = initialState, action) {
  const metaState = meta(state.meta, action);
  const doodlesState = doodles(state.doodles, action, metaState);

  const nextState = {
    doodles: doodlesState,
    meta: metaState,
  };

  return nextState;
}

export default reducer;
