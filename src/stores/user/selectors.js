import R from 'ramda';

const storeName = 'user';
const DEFAULT_AVATAR =
  'https://learnersschool.com/wp-content/uploads/2019/02/avatar-for-profile-picture-1.png';

export const getAuthLoadingStatus = R.pathOr(false, [storeName, 'isLoading',]);
export const getUsername = R.pathOr('You', [storeName, 'profile', 'name',]);
export const getEmail = R.pathOr('', [storeName, 'profile', 'email',]);
export const getUrlAvatar = R.pathOr(DEFAULT_AVATAR, [
  storeName,
  'profile',
  'picture',
  'data',
  'url',
]);

export const getID = R.pathOr(undefined, [storeName, 'profile', 'id',]);
export const isUserExists = (state) => !!getID(state);

export const getTokenUser = R.pathOr('', [storeName, 'auth', 'access',]);
