import { call, take, } from 'redux-saga/effects';

import { types, } from 'src/stores';

import getCurrentPosition from './getCurrentPosition';
import getShopByLocation from './getShopByLocation';

function* watchGetCurrentPosition() {
  while (true) {
    const actions = yield take(types.map.SET_POSITION);
    yield call(getCurrentPosition, actions);
  }
}

function* watchGetShopByLocation() {
  while (true) {
    const actions = yield take(types.map.GET_SHOP_BY_LOCATION);
    yield call(getShopByLocation, actions);
  }
}

export default [watchGetCurrentPosition(), watchGetShopByLocation(),];
