// @flow

import type { Dispatch, Meta } from 'modules/types';

import fetchJson from 'modules/fetch-json';

type State = Meta;

const initialState: State = {
  countries: [],
  linkTypes: [],
  schema: [],
  tags: [],
  urlPrefixes: {},
};

const FETCH_META = 'FETCH_META';

type Action = {
  type: 'FETCH_META',
  meta: State,
};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case FETCH_META:
      return {
        ...state,

        ...action.meta,
      };

    default:
      return state;
  }
}

async function fetchMeta(dispatch: Dispatch) {
  try {
    const meta = await fetchJson('/doodles/meta');

    dispatch({
      type: FETCH_META,
      meta,
    });
  } catch (err) {
    console.error(err);
  }
}

export { fetchMeta };

export default reducer;
