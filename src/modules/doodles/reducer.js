import fetchJson from 'modules/fetch-json';

const initialState = {
  meta: {
    countries: [],
    linkTypes: [],
    schema: [],
    tags: [],
    types: [],
    urlPrefixes: {},
  },

  doodles: [],
};

const FETCH_META = 'doodles/FETCH_META';
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

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_META:
      return {
        ...state,

        meta: action.meta,
      };

    case STREAM_DOODLES:
      return {
        ...state,

        doodles: inflate(action.doodles, state.meta),
      };

    default:
      return state;
  }
}

async function fetchMeta(dispatch) {
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

function streamDoodles(dispatch) {
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
  };
}

function loadDoodles() {
  return async (dispatch) => {
    await fetchMeta(dispatch);

    await streamDoodles(dispatch);
  };
}

export { loadDoodles };

export default reducer;
