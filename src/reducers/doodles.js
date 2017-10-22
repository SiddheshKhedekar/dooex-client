// @flow

import type { Dispatch, Doodle, Meta } from 'modules/types';

import fetchJson from 'modules/fetch-json';
import inflate from 'modules/inflate-doodles';
import { fetchMeta } from 'reducers/meta';

// $FlowFixMe
type State = Array<Doodle>;

type DeflatedDoodle = Array<any>;

type Action =
  | { type: 'FETCH_DOODLES', doodles: Array<DeflatedDoodle> }
  | { type: 'UPDATE_DOODLE', doodle: Doodle };

const initialState: State = [];

const FETCH_DOODLES = 'FETCH_DOODLES';
const UPDATE_DOODLE = 'UPDATE_DOODLE';

function reducer(state: State = initialState, action: Action, metaState: Meta) {
  switch (action.type) {
    case FETCH_DOODLES:
      return inflate(action.doodles, metaState);

    case UPDATE_DOODLE: {
      const doodleIdx = state.findIndex(doodle => doodle.id === action.doodle.id);

      return [
        ...state.slice(0, doodleIdx),
        {
          ...action.doodle,
        },
        ...state.slice(doodleIdx + 1),
      ];
    }

    default:
      return state;
  }
}

async function fetchDoodles(dispatch, sliceSize = null) {
  try {
    let url;
    switch (sliceSize) {
      case null:
        url = '/doodles/all';
        break;

      default:
        url = `/doodles/slice/${sliceSize}`;
    }

    const doodles = await fetchJson(url);

    dispatch({
      type: FETCH_DOODLES,
      doodles,
    });
  } catch (err) {
    console.error(err);
  }
}

function loadDoodles() {
  return async (dispatch: Dispatch) => {
    await fetchMeta(dispatch);
    await fetchDoodles(dispatch, 10);

    fetchDoodles(dispatch);
  };
}

function updateDoodle(doodle: Doodle) {
  return {
    type: UPDATE_DOODLE,
    doodle,
  };
}

export { UPDATE_DOODLE, loadDoodles, updateDoodle };

export default reducer;
