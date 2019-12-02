import { call, take, } from 'redux-saga/effects';

import { types, } from 'src/stores';
import getMenuByCategory from './getMenuByCategory';

function* watchgetMenuByCategory() {
  while (true) {
    const action = yield take(types.menu.GET_LIST_MENU_BY_CATEGORY);
    yield call(getMenuByCategory, action);
  }
}

export default [watchgetMenuByCategory(),];
