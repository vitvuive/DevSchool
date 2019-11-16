import { call, put, } from 'redux-saga/effects';

import { actions, } from 'src/stores';

import { API, } from 'src/services';

export default function* getCurrentPosition() {
  try {
    yield put(actions.global.setAuthLoadingStatus(true));
    const position = yield call(API.MapApi.getCurrentPosition);

    if (position === 'No location provider available.') alert('viet dep trai');

    yield put(actions.global.setPositionUser(position));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.global.setAuthLoadingStatus());
  }
}
