import { UPDATE_STYLE_FILTER } from './actionTypes';

const initialState = {
  styleFilters: []
};

export default  function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STYLE_FILTER:
      return {
        ...state,
        styleFilters: action.payload
      };
    default:
      return state;
  }
}

