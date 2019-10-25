import { put, } from 'redux-saga/effects';

import { actions, } from '../../stores';

import * as AppController from '../../AppController';
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
