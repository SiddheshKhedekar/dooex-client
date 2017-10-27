// @flow

type State = number;

type Action =
  | {
      type: 'UPDATE_BATCH_SIZE',
      batchSize: State,
    }
  | { type: 'RESET_BATCH_SIZE' };

const step = 5;

const initialState: State = step;

const UPDATE_BATCH_SIZE = 'UPDATE_BATCH_SIZE';
const RESET_BATCH_SIZE = 'RESET_BATCH_SIZE';

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case UPDATE_BATCH_SIZE:
      return state + step;

    case RESET_BATCH_SIZE:
      return initialState;

    default:
      return state;
  }
}

function resetBatchSize(): Action {
  return {
    type: RESET_BATCH_SIZE,
  };
}

function updateBatchSize(batchSize: number): Action {
  return {
    type: UPDATE_BATCH_SIZE,
    batchSize,
  };
}

export { resetBatchSize, updateBatchSize };

export default reducer;
