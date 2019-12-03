import { put, } from 'redux-saga/effects';
import { actions, } from 'src/stores';

export default function handleStatusCode(result: Object) {
  const shouldLogOut = result.code === 'token_not_valid';
  return function* handler() {
    if (shouldLogOut) yield put(actions.user.logout());
    throw new Error('You need login');
  };
}
