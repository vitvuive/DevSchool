import R from 'ramda';
const storeName = 'cart';

export const getCartData = R.pathOr(null, [storeName, 'byId',]);
