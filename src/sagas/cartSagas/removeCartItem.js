import { put, call, } from 'redux-saga/effects';
import { actions, } from 'src/stores';
import { API, } from 'src/services';

export default function* removeCartItem({ payload, }) {
  try {
    yield put(actions.cart.setCartLoadingStatus(true));

    yield call(API.CartApi.removeCartItem, payload);

    // TODO: check result fail threw error
    const data = yield call(API.CartApi.getCartData);

    yield put(actions.cart.setCartData(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.cart.setCartLoadingStatus(false));
  }
}
