import { UPDATE_GENDER_FILTER } from './actionTypes';

export const updateGenderFilter = genderFilter => ({
  type: UPDATE_GENDER_FILTER,
  payload: genderFilter
});

