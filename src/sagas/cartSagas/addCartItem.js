import { ToastAndroid, } from 'react-native';
import { call, put, select, } from 'redux-saga/effects';
import { actions, selectors, } from 'src/stores';
import { API, } from 'src/services';

export default function* addCartItem({ payload, }) {
  const { shopId, id, } = payload;
  let item = [];
  try {
    yield put(actions.cart.setCartLoadingStatus(true));
    const tokenUser = yield select(selectors.user.getTokenUser);
    const idTransaction = yield select(
      selectors.transaction.getIdCurrentTransaction
    );

    // get list array id  from by Id
    const itemArray = yield select(selectors.cart.getCartData);
    if (Array.isArray(itemArray)) item = item.concat(itemArray);
    item.push(id);

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

    yield put(actions.cart.setTransaction(result));

    if (typeof result !== 'object') alert('Try again');
    yield put(actions.cart.setCartData(item));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.cart.setCartLoadingStatus(false));
  }
}
