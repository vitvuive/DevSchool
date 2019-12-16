import { call, put, } from 'redux-saga/effects';

import { actions, } from 'src/stores';
import { API, } from 'src/services';
import { MeetyFetch, } from 'src/sagas/utils';
import { Logger, } from 'src/log-services';

// import { handleStatusCode, } from '../utils';

export default function* getShopByLocation() {
  let lat = 10.762337;
  let long = 106.7078704;
  try {
    yield put(actions.map.setMapLoadingStatus(true));

    //get latlong
    // const lat = yield select(selectors.map.getLatitude);
    // const long = yield select(selectors.map.getLongitude);

    if (typeof lat !== Number) {
      yield put(actions.map.getCurrentPosition());
    }

    const result = yield call(MeetyFetch, {
      apiFunc: API.MapApi.getShopByLocation,
      params: { lat, long, },
    });

    if (!result.results) {
      throw new Error('The result is not an array');
    }

    yield put(actions.map.setShopData(result.results));
  } catch (error) {
    Logger.error(error);
    yield put(actions.global.toastMessage(error, 10000));
  } finally {
    yield put(actions.map.setMapLoadingStatus());
  }
}
