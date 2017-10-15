import { fetchMeta } from 'modules/meta/reducer';

const initialState = [];

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
    case STREAM_DOODLES:
      return [...state, ...inflate(action.doodles, metaState)];

    default:
      return state;
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
