import {FETCH_PRODUCT_DETAILS, FETCH_PRODUCTS} from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const fetchProducts = (genderFilter,styleFilters, sortBy, callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data;
      if (!!genderFilter && genderFilter.length > 1) {
        products = products.filter(p =>
          genderFilter.find(f => p.gender.find(gender =>
            gender === f))
        );
        debugger;
      }
      if (!!styleFilters && styleFilters.length > 0) {
        products = products.filter(p =>
          styleFilters.find(f =>
            p.danceCategories.find(category =>
              category === f))
        );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};
export const fetchProductDetails = (sku,callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      let {products} = res.data;
      console.log(sku);
      let [productDetails] = products.filter(p =>
        p.sku === Number(sku));
      console.log(productDetails);
      if (!!callback) {
        callback();
      }
      return dispatch({
        type: FETCH_PRODUCT_DETAILS,
        payload: productDetails
      });
    })
    .catch(err => {
      console.log('Could not fetch product Details. Try again later.');
    });
};
