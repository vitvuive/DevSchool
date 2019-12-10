import { put, } from 'redux-saga/effects';
import { actions, } from 'src/stores';
// import { API, } from 'src/services';
export default function* getTransactionData() {
  try {
    yield put(actions.transaction.setTransactionLoadingStatus(true));

    // const tokenUser = yield select(selectors.user.getTokenUser);

    // const result = yield call(API.TransactionApi.getTransactionData, {
    //   tokenUser,
    // });

    // if (result.code === 'token_not_valid') {
    //   yield put(actions.user.logout());
    // } //TODO: create a fetchAPI common

    // yield put(actions.transaction.setTransactionData(result));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.transaction.setTransactionLoadingStatus());
  }
}
