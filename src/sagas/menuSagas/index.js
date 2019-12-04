import { call, take, } from 'redux-saga/effects';

import { types, } from 'src/stores';
import getMenuByCategory from './getMenuByCategory';
import getCategoryListByMerchant from './getCategoryListByMerchant';

function* watchgetMenuByCategory() {
  while (true) {
    const action = yield take(types.menu.GET_LIST_MENU_BY_CATEGORY);
    yield call(getMenuByCategory, action);
  }
}

function* watchGetCategoryListByMerchant() {
  while (true) {
    const action = yield take(types.menu.GET_LIST_CATEGORY_BY_MERCHANT);
    yield call(getCategoryListByMerchant, action);
  }
}

export default [watchgetMenuByCategory(), watchGetCategoryListByMerchant(),];
