import { all, } from 'redux-saga/effects';
import userSagas from './userSagas';
import mapSagas from './mapSagas';
import cartSagas from './cartSagas';

export default function*() {
  yield all([...userSagas, ...mapSagas, ...cartSagas,]);
}
