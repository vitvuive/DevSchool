import { put, call, select, } from 'redux-saga/effects';

import { actions, selectors, } from 'src/stores';
import { API, } from 'src/services';

export default function* getMenuByCategory({ payload, }) {
  let { categoryId, merchantId, } = payload;
  try {
    yield put(actions.menu.setLoadingStatus(true));

    const tokenUser = yield select(selectors.user.getTokenUser);
    if (tokenUser === '') throw Error('Token not found');

    const result = yield call(API.MenuApi.getMenuByCategory, {
      categoryId,
      merchantId,
      tokenUser,
    });

    if (result.code === 'token_not_valid') {
      yield put(actions.user.logout());
    } //TODO: create a fetchAPI common

    const { results, } = result;

    //TODO: create a common funtion map
    const map = results.map(({ img_url, name, price, id, }) => ({
      img_url,
      name,
      price,
      id,
    }));

    const menuById = { [merchantId]: { [categoryId]: { data: map, }, }, };

    yield put(actions.menu.setMenuDataById(menuById));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.menu.setLoadingStatus());
  }
}
