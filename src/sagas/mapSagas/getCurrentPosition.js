import { call, put, } from 'redux-saga/effects';

import { actions, } from 'src/stores';

import { API, } from 'src/services';

export default function* getCurrentPosition() {
  try {
    yield put(actions.map.setMapLoadingStatus(true));
    const position = yield call(API.MapApi.getCurrentPosition);

    if (typeof position !== Object) {
      yield put(actions.map.getCurrentPosition());
    }

    yield put(actions.map.setPositionUser(position));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.map.setMapLoadingStatus());
  }
}
