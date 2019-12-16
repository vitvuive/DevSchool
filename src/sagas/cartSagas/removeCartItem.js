import Immutable from 'seamless-immutable';
import R from 'ramda';
import { put, call, select, } from 'redux-saga/effects';
import { actions, selectors, } from 'src/stores';
import { API, } from 'src/services';
import { MeetyFetch, } from '../utils';

export default function* removeCartItem({ payload, }) {
  // const id = payload;
  let item = [];

  try {
    yield put(actions.cart.setCartLoadingStatus(true));

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

    const result = yield call(MeetyFetch, {
      apiFunc: API.CartApi.addCartItem,
      postBody: { item, shop: shopId, },
      params: { idTransaction, },
    });

    yield put(actions.cart.setCartData(item));
    yield put(actions.cart.setTransaction(result));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.cart.setCartLoadingStatus(false));
  }
}
