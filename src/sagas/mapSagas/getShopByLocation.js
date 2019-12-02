import { call, put, } from 'redux-saga/effects';
import { actions, } from 'src/stores';
import { API, } from 'src/services';

export default function* getShopByLocation() {
  try {
    yield put(actions.map.setMapLoadingStatus(true));

    //get latlong
    // const lat = yield select(selectors.map.getLatitude);
    // const long = yield select(selectors.map.getLongitude);

    const result = yield call(API.MapApi.getShopByLocation);
    // eslint-disable-next-line no-console
    console.log('getShopByLocation:', result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    yield put(actions.map.setMapLoadingStatus());
  }
}
