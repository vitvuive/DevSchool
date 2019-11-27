import { take, call, } from 'redux-saga/effects';

import { types, } from 'src/stores';

import getCartData from './getCartData';

function* watchGetCartData() {
  try {
    while (true) {
      const action = yield take(types.cart.GET_CART_DATA);
      yield call(getCartData, action);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default [watchGetCartData(),];
