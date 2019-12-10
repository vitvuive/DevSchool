import { ToastAndroid, } from 'react-native';
import { call, put, select, } from 'redux-saga/effects';
import { selectors, actions, } from 'src/stores';
import { API, } from 'src/services';
export default function* getCategoryListByMerchant({ payload, }) {
  try {
    yield put(actions.menu.setLoadingStatus(true));

    const tokenUser = yield select(selectors.user.getTokenUser);

    const result = yield call(API.MenuApi.getCategoryByMerchant, {
      merchantId: payload,
      tokenUser,
    });

    if (result.code === 'token_not_valid') {
      ToastAndroid.show('Session expired, please login again', 2);
      yield put(actions.user.logout());
    } //TODO: create a fetchAPI common

    yield put(actions.menu.setCategoryByMerchant(result));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.menu.setLoadingStatus());
  }
}
