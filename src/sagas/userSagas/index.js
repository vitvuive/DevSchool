import { call, take, } from 'redux-saga/effects';

import { types, } from '../../stores';
import handleLogin from './handleLogin';
import handleLogout from './handleLogout';

function* watchLogin() {
  while (true) {
    const action = yield take(types.user.LOGIN_WITH_FB);
    yield call(handleLogin, action);
  }
}

function* watchLogout() {
  while (true) {
    const action = yield take(types.user.LOGOUT);
    yield call(handleLogout, action);
  }
}

export default [watchLogin(), watchLogout(),];
