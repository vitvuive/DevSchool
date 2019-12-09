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
    const itemArray = yield select(selectors.cart.getCartData);

    if (Array.isArray(itemArray)) {
      item = itemArray.splice(itemArray.indexOf(payload), 1);
    }

    const result = yield call(API.CartApi.addCartItem, {
      shopId,
      item,
      tokenUser,
      idTransaction,
    });

    yield put(actions.cart.setTransaction(result));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.cart.setCartLoadingStatus(false));
  }
}
