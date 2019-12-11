import { ToastAndroid, } from 'react-native';
import { call, put, select, } from 'redux-saga/effects';
import { actions, selectors, } from 'src/stores';
import { API, } from 'src/services';

// import { handleStatusCode, } from '../utils';

export default function* getShopByLocation() {
  try {
    yield put(actions.map.setMapLoadingStatus(true));

    //get latlong
    const lat = yield select(selectors.map.getLatitude);
    const long = yield select(selectors.map.getLongitude);

    if (typeof lat !== Number) {
      yield put(actions.map.getCurrentPosition());
    }

    const tokenUser = yield select(selectors.user.getTokenUser);

    const result = yield call(API.MapApi.getShopByLocation, {
      tokenUser,
      lat,
      long,
    });
    if (result.code === 'token_not_valid') {
      ToastAndroid.show('Session expired, please login again', 2);
      yield put(actions.user.logout());
    } //TODO: create a fetchAPI common

    //   handleStatusCode(result);

    yield put(actions.map.setShopData(result.results));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    yield put(actions.map.setMapLoadingStatus());
  }
}
