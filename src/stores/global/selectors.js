import R from 'ramda';

const storeName = 'global';

export const getPosLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);

export const getTimestamp = R.pathOr(null, [
  storeName,
  'position',
  'timestamp',
]);

export const getPosition = R.pathOr(null, [storeName, 'position',]);
