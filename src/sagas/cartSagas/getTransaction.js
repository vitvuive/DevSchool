import { call, put, } from 'redux-saga/effects';
import { actions, } from 'src/stores';
import { API, } from 'src/services';
export default function* getTransaction() {
  try {
    yield put(actions.cart.setCartLoadingStatus(true));
    const data = yield call(API.CartApi.getTransaction);
    yield put(actions.cart.setTransaction(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.cart.setCartLoadingStatus());
  }
}
