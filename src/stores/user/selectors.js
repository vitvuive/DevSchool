import R from 'ramda';

const storeName = 'user';

export const getAuthLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);
export const getUsername = R.pathOr('No name', [storeName, 'profile', 'name',]);
export const getEmail = R.pathOr('No name', [storeName, 'profile', 'email',]);
export const getUrlAvatar = R.pathOr('No name', [
  storeName,
  'profile',
  'picture',
  'data',
  'url',
]);

export const getID = R.pathOr(undefined, [storeName, 'profile', 'id',]);
export const isUserExists = (state) => !!getID(state);
