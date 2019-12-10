import { take, call, } from 'redux-saga/effects';
import getTransactionData from './getTransactionData';
import postTransaction from './postTransaction';
import { types, } from 'src/stores';

function* watchGetTransactionData() {
  while (true) {
    const action = yield take(types.transaction.GET_TRANSACTION_DATA);
    yield call(getTransactionData, action);
  }
}

function* watchPostTransaction() {
  while (true) {
    const action = yield take(types.transaction.POST_TRANSACTION);
    yield call(postTransaction, action);
  }
}

export default [watchGetTransactionData(), watchPostTransaction(),];
