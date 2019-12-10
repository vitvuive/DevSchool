/* eslint-disable no-console */
import { Alert, } from 'react-native';
import { call, put, } from 'redux-saga/effects';

import { actions, } from 'src/stores';

import * as AppController from 'src/AppController';
import { API, } from 'src/services';

const PASSWORD = 'vietdapchai97';
const KEY_USER = 'peter';

export default function* handleLogin() {
  try {
    yield put(actions.user.setAuthLoadingStatus(true));

    yield call(API.AuthFb.logOut);

    const isLogin = yield call(API.AuthFb.logInWithPermissions);
    console.log('abc', isLogin);

    if (isLogin.isCancelled === true) return;

    const tokenFb = yield call(API.AuthFb.getCurrentAccessToken);

    // yield put(actions.user.setAuthData(tokenFb));

    const infoUser = yield call(API.AuthFb.getInfoUserFb, tokenFb.accessToken);

    yield put(actions.user.setProfile(infoUser));

    const resultMyServer = yield call(API.AuthFb.loginWithAccount, {
      username: infoUser.id + KEY_USER,
      password: PASSWORD,
    });

    console.log('vietresultMyServer', resultMyServer);

    // Do not have a count, go to create accounts
    if (
      resultMyServer.detail ===
      'No active account found with the given credentials'
    ) {
      yield call(createUSer, infoUser);
    }

    //Dont have token can not into main app
    if (!resultMyServer.access) throw Error('token empty');
    yield put(actions.user.setAuthData(resultMyServer));
    AppController.startMainApp();
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.user.setAuthLoadingStatus(false));
    //TODO: clear user app as loading
  }
}

function* createUSer(infoUser) {
  try {
    const resCreate = yield call(API.AuthFb.createWithAccount, {
      username: infoUser.id + KEY_USER,
      password: PASSWORD,
      email: infoUser.email,
    });

    if (resCreate.username !== infoUser.id + KEY_USER) {
      Alert.alert('Create account failed', 'Please check again');
      throw new Error('Create account failed');
    }

    Alert.alert(
      'Create account successfully',
      `with email: ${infoUser.email}, Session expired, please login again`
    );
  } catch (error) {
    console.log(error);
  }
}
