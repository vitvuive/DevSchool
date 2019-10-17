import R from 'ramda';

const storeName = 'user';

export const getAuthLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);
