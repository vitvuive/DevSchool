import { all, } from 'redux-saga/effects';
import userSagas from './userSagas';

export default function*() {
  yield all([...userSagas,]);
}
