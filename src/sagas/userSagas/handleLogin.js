/* eslint-disable no-console */
import { call, put, } from 'redux-saga/effects';

import { actions, } from 'src/stores';

import * as AppController from 'src/AppController';
import { API, } from 'src/services';

export default function* handleLogin() {
  let username = 'vietqb9779@gmail.com';
  let password = 'de32wsaq1';
  try {
    yield put(actions.user.setAuthLoadingStatus(true));

    const isLogin = yield call(API.AuthFb.logInWithPermissions);

    if (isLogin.isCancelled === true) return;

    const tokenFb = yield call(API.AuthFb.getCurrentAccessToken);

    // yield put(actions.user.setAuthData(tokenFb));

    const result = yield call(API.AuthFb.getInfoUserFb, tokenFb.accessToken);

    yield put(actions.user.setProfile(result));

    const resultMyServer = yield call(API.AuthFb.loginWithAccount, {
      username,
      password,
    });

    yield put(actions.user.setAuthData(resultMyServer));

    AppController.startMainApp();
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.user.setAuthLoadingStatus(false));
  }
}
