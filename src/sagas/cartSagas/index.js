import { take, call, } from 'redux-saga/effects';

import { types, } from 'src/stores';

import getCartData from './getCartData';
import removeCartItem from './removeCartItem';
import addCartItem from './addCartItem';
import checkOut from './checkOut';
import getTransaction from './getTransaction';

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

function* watchRemoveCartItem() {
  while (true) {
    const action = yield take(types.cart.REMOVE_ITEM_FROM_CART);
    yield call(removeCartItem, action);
  }
}

function* watchAddCartItem() {
  while (true) {
    const action = yield take(types.cart.ADD_ITEM_TO_CART);
    yield call(addCartItem, action);
  }
}

function* watchCheckOut() {
  while (true) {
    const action = yield take(types.cart.CHECK_OUT);
    yield call(checkOut, action);
  }
}

function* watchGetTransaction() {
  while (true) {
    const action = yield take(types.cart.GET_TRANSACTION);
    yield call(getTransaction, action);
  }
}

export default [
  watchGetCartData(),
  watchRemoveCartItem(),
  watchAddCartItem(),
  watchCheckOut(),
  watchGetTransaction(),
];
