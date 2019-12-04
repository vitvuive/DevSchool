import R from 'ramda';

const storeName = 'menu';

export const getLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);

export const getListMenuByCategory = (state, { categoryId, merchantId, }) =>
  R.pathOr([], [storeName, 'byId', merchantId, categoryId, 'data',], state);

export const getListCategory = R.pathOr([], [storeName, 'listCategory',]);
