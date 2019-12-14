import {FETCH_PRODUCT_DETAILS, FETCH_PRODUCTS} from './actionTypes';

const initialState = {
  products: [],
  productDetails:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails:action.payload
      }
    default:
      return state;
  }
}
