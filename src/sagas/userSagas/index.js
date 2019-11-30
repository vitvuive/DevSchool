import { call, take } from "redux-saga/effects";

import { types } from "src/stores";
import handleLogin from "./handleLogin";
import handleLogout from "./handleLogout";
import handleLoginFirebase from "./handleLoginFirebase";
import handelRegisterFirebase from "./handleRegisterFirebase";

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

function* watchLoginFirebase() {
  while (true) {
    const action = yield take(types.user.LOGIN);
    yield call(handleLoginFirebase, action);
  }
}

function* watchRegisterFirebase() {
  while (true) {
    const action = yield take(types.user.REGISTER);
    yield call(handelRegisterFirebase, action);
  }
}

export default [
  watchLogin(),
  watchLogout(),
  watchLoginFirebase(),
  watchRegisterFirebase()
];
