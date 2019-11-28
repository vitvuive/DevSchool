import R from 'ramda';
const storeName = 'cart';

export const getCartData = R.pathOr(null, [storeName, 'byId',]);

export const getLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);
