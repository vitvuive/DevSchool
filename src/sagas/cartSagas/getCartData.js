import { call, put, } from 'redux-saga/effects';
import { actions, } from 'src/stores';
import { API, } from 'src/services';

export default function* getCartData() {
  try {
    yield put(actions.cart.setCartLoadingStatus(true));
    const result = yield call(API.CartApi.getCartData);
    yield put(actions.cart.setCartData(result));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.cart.setCartLoadingStatus(false));
  }
}
