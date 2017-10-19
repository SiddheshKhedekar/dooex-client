// @flow

const UPDATE_KEYWORD = 'search/UPDATE_KEYWORD';
const RESET_KEYWORD = 'search/RESET_KEYWORD';

type State = string;
const initialState = '';

type Action = { type: 'search/UPDATE_KEYWORD', keyword: string } | { type: 'search/RESET_KEYWORD' };

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case UPDATE_KEYWORD:
      return action.keyword;

    case RESET_KEYWORD:
      return '';

    default:
      return state;
  }
}

function updateKeyword(keyword: string): Action {
  return {
    type: UPDATE_KEYWORD,
    keyword,
  };
}

function resetKeyword(): Action {
  return {
    type: RESET_KEYWORD,
  };
}

export { updateKeyword, resetKeyword };

export default reducer;
