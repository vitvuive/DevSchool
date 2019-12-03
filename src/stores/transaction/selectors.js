import R from 'ramda';

const storeName = 'transaction';

export const getLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);

export const getHistoryData = R.pathOr({}, [storeName, 'historyList',]);
export const getDataTransaction = R.pathOr({}, [storeName, 'data',]);
