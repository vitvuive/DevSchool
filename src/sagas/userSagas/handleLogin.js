/* eslint-disable no-console */
import { Alert, } from 'react-native';
import { call, put, } from 'redux-saga/effects';

import { actions, } from 'src/stores';

import * as AppController from 'src/AppController';
import { API, } from 'src/services';
import { ConfigApi, } from 'src/values';

export default function* handleLogin() {
  try {
    yield put(actions.user.setAuthLoadingStatus(true));

    const isLogin = yield call(API.AuthFb.logInWithPermissions);

    if (isLogin.isCancelled === true) return;

    const tokenFb = yield call(API.AuthFb.getCurrentAccessToken);

    // yield put(actions.user.setAuthData(tokenFb));

    const infoUser = yield call(API.AuthFb.getInfoUserFb, tokenFb.accessToken);

    yield put(actions.user.setProfile(infoUser));

    const resultMyServer = yield call(API.AuthFb.loginWithAccount, {
      username: infoUser.email,
      password: infoUser.id + ConfigApi.KEY_AUTH,
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
    Alert.alert(
      'Create account successfully',
      `You will have account with email: ${infoUser.email}`
    );
    const resCreate = yield call(API.AuthFb.createWithAccount, {
      username: infoUser.email,
      password: infoUser.id + ConfigApi.KEY_AUTH,
      email: infoUser.email,
    });

    if (resCreate.username !== infoUser.email) {
      Alert.alert('Create account failed', 'Please check again');
    }
    console.log('viet dep trai', resCreate);
  } catch (error) {
    console.log(error);
  }
}
