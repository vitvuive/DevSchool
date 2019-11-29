import { call, put, } from 'redux-saga/effects';
import { actions, } from 'src/stores';
import { API, } from 'src/services';

export default function* checkOut() {
  try {
    yield put(actions.cart.setCartLoadingStatus(true));
    yield call(API.CartApi.checkOut);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.cart.setCartLoadingStatus());
  }
}
