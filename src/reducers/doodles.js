// @flow

import type { Dispatch, Doodle, Meta } from 'modules/types';

import fetchJson from 'modules/fetch-json';
import { fetchMeta } from 'reducers/meta';

// $FlowFixMe
type State = Array<Doodle>;

type DeflatedDoodle = Array<any>;

type Action = {
  type: 'FETCH_DOODLES',
  doodles: Array<DeflatedDoodle>,
};

const initialState: State = [];

const FETCH_DOODLES = 'doodles/FETCH_DOODLES';

function inflate(deflatedDoodles: Array<DeflatedDoodle>, meta: Meta): State {
  const {
    countries, linkTypes, schema, tags, urlPrefixes,
  } = meta;

  const doodles = deflatedDoodles.map((_, i) => {
    const doodle = {};

    schema.forEach((key, j) => {
      doodle[key] = deflatedDoodles[i][j];
    });

    linkTypes
      // $FlowFixMe
      .filter(linkType => schema.includes(linkType))
      .filter(linkType => doodle[linkType] !== null)
      .forEach((linkType) => {
        const urlPrefixIdx = doodle[linkType][0];

        const urlPrefix = urlPrefixes[urlPrefixIdx];
        doodle[linkType] = doodle[linkType].replace(urlPrefixIdx, urlPrefix);
      });

    doodle.countries = doodle.countries.map(cIdx => countries[cIdx]);
    doodle.tags = doodle.tags.map(tIdx => tags[tIdx]);

    return doodle;
  });

  return doodles;
}

function reducer(state: State = initialState, action: Action, metaState: Meta) {
  switch (action.type) {
    case FETCH_DOODLES:
      return inflate(action.doodles, metaState);

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

export { loadDoodles };

export default reducer;
