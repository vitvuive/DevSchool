import { call, take, } from 'redux-saga/effects';

import { types, } from 'src/stores';

import getCurrentPosition from './getCurrentPosition';

function* watchGetCurrentPosition() {
  while (true) {
    const actions = yield take(types.map.SET_POSITION);
    yield call(getCurrentPosition, actions);
  }
}

export default [watchGetCurrentPosition(),];
