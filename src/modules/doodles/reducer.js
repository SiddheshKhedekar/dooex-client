import fetchJson from 'modules/fetch-json';
import { fetchMeta } from 'modules/meta/reducer';

const sliceSize = 10;
const initialState = [];

const FETCH_DOODLES_SLICE = 'doodles/FETCH_DOODLES_SLICE';
const STREAM_DOODLES = 'doodles/STREAM_DOODLES';

function inflate(doodles, meta) {
  const {
    allCountries, allTags, schema, linkTypes, urlPrefixes,
  } = meta;

  const inflatedDoodles = doodles.map((_, i) => {
    const doodle = {};

    schema.forEach((key, j) => {
      doodle[key] = doodles[i][j];
    });

    linkTypes
      .filter(linkType => schema.includes(linkType))
      .filter(linkType => doodle[linkType] !== null)
      .forEach((linkType) => {
        const urlPrefixIdx = doodle[linkType][0];

        const urlPrefix = urlPrefixes[urlPrefixIdx];
        doodle[linkType] = doodle[linkType].replace(urlPrefixIdx, urlPrefix);
      });

    doodle.countries = doodle.countries.map(cIdx => allCountries[cIdx]);
    doodle.tags = doodle.tags.map(tIdx => allTags[tIdx]);

    return doodle;
  });

  return inflatedDoodles;
}

function reducer(state = initialState, action, metaState) {
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
  return async (dispatch) => {
    await fetchMeta(dispatch);
    await fetchDoodlesSlice(dispatch);
    await streamDoodles(dispatch);
  };
}

export { loadDoodles };

export default reducer;
