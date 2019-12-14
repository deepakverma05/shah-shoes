import { UPDATE_GENDER_FILTER } from './actionTypes';

const initialState = {
  genderFilter: []
};

export default  function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GENDER_FILTER:
      return {
        ...state,
        genderFilter: action.payload
      };
    default:
      return state;
  }
}

