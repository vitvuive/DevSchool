import { put, } from 'redux-saga/effects';

import { actions, } from 'src/stores';

import * as AppController from 'src/AppController';
export default function* handleLogout() {
  try {
    yield put(actions.user.setAuthLoadingStatus(true));
    AppController.startLogin();
    yield put(actions.user.setAuthData());
    yield put(actions.user.setProfile());
  } catch (error) {
    alert(error);
  } finally {
    yield put(actions.user.setAuthLoadingStatus(false));
  }
}
