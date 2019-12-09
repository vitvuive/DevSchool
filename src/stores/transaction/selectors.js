import R from 'ramda';

const storeName = 'transaction';

export const getLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);

export const getHistoryData = R.pathOr({}, [storeName, 'historyList',]);
export const getDataTransaction = R.pathOr({}, [storeName, 'data',]);

export const getIdCurrentTransaction = R.pathOr(null, [
  storeName,
  'data',
  'id',
]);

export const getItemCurrentTransaction = R.pathOr(null, [
  storeName,
  'data',
  'item',
]);
