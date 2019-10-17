import { call, } from 'redux-saga/effects';

import handleLogin from './handleLogin';
import handleLogout from './handleLogout';

function* watchLogin() {
  while (true) {
    yield call(handleLogin);
  }
}

function* watchLogout() {
  while (true) {
    yield call(handleLogout);
  }
}

export default [watchLogin(), watchLogout(),];
