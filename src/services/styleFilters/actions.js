import { UPDATE_STYLE_FILTER } from './actionTypes';

export const updateStyleFilters = styleFilters => ({
  type: UPDATE_STYLE_FILTER,
  payload: styleFilters
});
