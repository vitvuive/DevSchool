import R from 'ramda';

const storeName = 'global';

export const getPosLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);

export const getTimestamp = R.pathOr('null', [
  storeName,
  'position',
  'timestamp',
]);

export const getLongitude = R.pathOr('null', [
  storeName,
  'position',
  'coords',
  'longitude',
]);

export const getLatitude = R.pathOr('null', [
  storeName,
  'position',
  'coords',
  'latitude',
]);
