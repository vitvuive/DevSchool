import R from 'ramda';

const storeName = 'user';

export const getAuthLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);
export const getUsername = R.pathOr('No name', [storeName, 'profile', 'name',]);
export const getUrlAvatar = R.pathOr('No name', [
  storeName,
  'profile',
  'picture',
  'data',
  'url',
]);
