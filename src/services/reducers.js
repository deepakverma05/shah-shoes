import { combineReducers } from 'redux';
import shelfReducer from './shelf/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import styleFiltersReducer from './styleFilters/reducer';
import genderFilterReducer from './genderFilter/reducer';
import sortReducer from './sort/reducer';

export default combineReducers({
  shelf: shelfReducer,
  cart: cartReducer,
  total: totalReducer,
  genderFilter:genderFilterReducer,
  styleFilters: styleFiltersReducer,
  sort: sortReducer
});
