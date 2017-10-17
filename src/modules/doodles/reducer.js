// @flow

import type { Doodle as DoodleType, Dispatch, Meta } from 'modules/types';

import fetchJson from 'modules/fetch-json';
import { fetchMeta } from 'modules/meta/reducer';

// $FlowFixMe
type State = Array<DoodleType>;
type DeflatedDoodle = Array<any>;

const sliceSize = 10;
const initialState: State = [];

const FETCH_DOODLES_SLICE = 'FETCH_DOODLES_SLICE';
const STREAM_DOODLES = 'STREAM_DOODLES';

type Action =
  | {
      type: 'FETCH_DOODLES_SLICE',
      doodles: Array<DeflatedDoodle>,
    }
  | {
      type: 'STREAM_DOODLES',
      doodles: Array<DeflatedDoodle>,
    };

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
    case FETCH_DOODLES_SLICE:
      return inflate(action.doodles, metaState);

    case STREAM_DOODLES:
      // Add remaining doodles without invoking re-render
      inflate(action.doodles, metaState)
        .slice(sliceSize)
        .forEach(doodle => state.push(doodle));

      return state;

    default:
      return state;
  }
}

async function fetchDoodlesSlice(dispatch) {
  try {
    const doodles = await fetchJson(`/doodles/slice/${sliceSize}`);

    dispatch({
      type: FETCH_DOODLES_SLICE,
      doodles,
    });
  } catch (err) {
    console.error(err);
  }
}

function streamDoodles(dispatch) {
  return new Promise((res) => {
    const doodles = [];

    const socket = new WebSocket('ws://localhost:8000/doodles/stream');

    socket.onmessage = ({ data }) => {
      // $FlowFixMe
      const doodle = JSON.parse(data);

      doodles.push(doodle);
    };

    socket.onclose = () => {
      dispatch({
        type: STREAM_DOODLES,
        doodles,
      });

      res();
    };
  });
}

function loadDoodles() {
  return async (dispatch: Dispatch) => {
    await fetchMeta(dispatch);

    fetchDoodlesSlice(dispatch);
    streamDoodles(dispatch);
  };
}

export { loadDoodles };

export default reducer;
