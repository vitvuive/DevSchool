/* eslint-disable no-console */
import { call, put, } from 'redux-saga/effects';

import { actions, } from '../../stores';

import * as AppController from '../../AppController';
import { API, } from '../../services';

export default function* handleLogin() {
  try {
    yield put(actions.user.setAuthLoadingStatus(true));

    const isLogin = yield call(API.AuthFb.logInWithPermissions);

    if (isLogin.isCancelled === true) return;

    const token = yield call(API.AuthFb.getCurrentAccessToken);

    yield put(actions.user.setAuthData(token));

    const result = yield call(API.AuthFb.getInfoUserFb, token.accessToken);

    console.log('result in saga is: ' + result);

    yield put(actions.user.setProfile(result));

    AppController.startMainApp();
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.user.setAuthLoadingStatus(false));
  }
}
