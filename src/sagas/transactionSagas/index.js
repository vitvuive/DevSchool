import { take, call, } from 'redux-saga/effects';
import getTransactionData from './getTransactionData';
import { types, } from 'src/stores';

function* watchGetTransactionData() {
  while (true) {
    const action = yield take(types.transaction.GET_TRANSACTION_DATA);
    yield call(getTransactionData, action);
  }
}

export default [watchGetTransactionData(),];
