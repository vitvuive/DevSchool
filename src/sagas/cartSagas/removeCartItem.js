import Immutable from 'seamless-immutable';
import R from 'ramda';
import { ToastAndroid, } from 'react-native';
import { put, call, select, } from 'redux-saga/effects';
import { actions, selectors, } from 'src/stores';
import { API, } from 'src/services';

export default function* removeCartItem({ payload, }) {
  // const id = payload;
  let item = [];

  try {
    yield put(actions.cart.setCartLoadingStatus(true));

    const tokenUser = yield select(selectors.user.getTokenUser);
    const idTransaction = yield select(
      selectors.transaction.getIdCurrentTransaction
    );
    const dataTran = yield select(selectors.cart.getTransaction);
    const shopId = dataTran.shop.id;

    // update list array id  from by Id
    var dataById = yield select(selectors.cart.getCartData);
    item = Immutable.asMutable(dataById);

    if (Array.isArray(item)) {
      item = R.without([payload,], item);
    }
    const result = yield call(API.CartApi.addCartItem, {
      shopId,
      item,
      tokenUser,
      idTransaction,
    });

    if (result.code === 'token_not_valid') {
      ToastAndroid.show('Session expired, please login again', 2);
      yield put(actions.user.logout());
    } //TODO: create a fetchAPI common

    yield put(actions.cart.setCartData(item));
    yield put(actions.cart.setTransaction(result));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.cart.setCartLoadingStatus(false));
  }
}
