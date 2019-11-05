import { all, } from 'redux-saga/effects';
import userSagas from './userSagas';
import mapSagas from './mapSagas';

export default function*() {
  yield all([...userSagas, ...mapSagas,]);
}
