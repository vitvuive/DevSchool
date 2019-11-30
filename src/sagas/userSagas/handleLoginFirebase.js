import { call, put } from "redux-saga/effects";

import { actions } from "src/stores";

import * as AppController from "src/AppController";
import { API } from "src/services";

export default function* handleLogin(action) {
  try {
    yield put(actions.user.setAuthLoadingStatus(true));

    const response = yield call(API.Firebase.login, action.payload);
    const token = response.user.refreshToken;
    yield put(actions.user.setAuthData(token));

    AppController.startMainApp();
  } catch (error) {
    alert(error.message);
  } finally {
    yield put(actions.user.setAuthLoadingStatus(false));
  }
}
