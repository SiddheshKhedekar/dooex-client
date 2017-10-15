import fetchJson from 'modules/fetch-json';

const initialState = {
  countries: [],
  linkTypes: [],
  schema: [],
  tags: [],
  types: [],
  urlPrefixes: {},
};

const FETCH_META = 'doodles/FETCH_META';

function reducer(state = initialState, action) {
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

export { fetchMeta };

export default reducer;
