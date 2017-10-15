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

const GET_META_REQUEST = 'doodles/GET_META_REQUEST';
const GET_META_SUCCESS = 'doodles/GET_META_SUCCESS';
const GET_META_FAILURE = 'doodles/GET_META_FAILURE';

const GET_DOODLES_REQUEST = 'doodles/GET_DOODLES_REQUEST';
const GET_DOODLES_SUCCESS = 'doodles/GET_DOODLES_SUCCESS';
const GET_DOODLES_FAILURE = 'doodles/GET_DOODLES_FAILURE';

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
    case GET_META_SUCCESS:
      return {
        ...state,

        meta: action.meta,
      };

    case GET_DOODLES_SUCCESS:
      return {
        ...state,

        doodles: inflate(action.doodles, state.meta),
      };

    default:
      return state;
  }
}

async function fetchMeta(dispatch) {
  dispatch({ type: GET_META_REQUEST });

  try {
    const meta = await fetchJson('/doodles/meta');

    dispatch({
      type: GET_META_SUCCESS,
      meta,
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: GET_META_FAILURE,
      err,
    });
  }
}

async function fetchDoodles(dispatch) {
  dispatch({ type: GET_DOODLES_REQUEST });

  try {
    const doodles = await fetchJson('/doodles/slice/10');

    dispatch({
      type: GET_DOODLES_SUCCESS,
      doodles,
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: GET_DOODLES_FAILURE,
      err,
    });
  }
}

function loadDoodles() {
  return async (dispatch) => {
    await fetchMeta(dispatch);

    fetchDoodles(dispatch);
  };
}

export { loadDoodles };

export default reducer;
