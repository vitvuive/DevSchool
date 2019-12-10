import { call, put, select, } from 'redux-saga/effects';
import { ToastAndroid, } from 'react-native';
import { actions, selectors, } from 'src/stores';
import { API, } from 'src/services';
export default function* postTransaction() {
  try {
    yield put(actions.transaction.setTransactionLoadingStatus(true));

    const tokenUser = yield select(selectors.user.getTokenUser);

    const result = yield call(API.TransactionApi.postATransaction, {
      tokenUser,
    });

    if (result.code === 'token_not_valid') {
      ToastAndroid.show('Session expired, please login again', 2);
      yield put(actions.user.logout());
    }

    if (result.detail === 'Not found.') {
      //create profile for user to create transaction
      const res = yield call(API.AuthFb.createProfile, { tokenUser, });

      if (!res.user) {
        // eslint-disable-next-line no-console
        console.error('create profile failed');
      }
      const result2 = yield call(API.TransactionApi.postATransaction, {
        tokenUser,
      });
      yield put(actions.transaction.setTransactionData(result2));
    } else {
      yield put(actions.transaction.setTransactionData(result));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(actions.transaction.setTransactionLoadingStatus());
  }
}

// function* createProfile(tokenUser) {
//   try {
//     console.log('viet post:createProfile');
//     //create profile for user to create transaction
//     const res = yield call(API.AuthFb.createProfile, { tokenUser, });

//     if (!res.user) {
//       // eslint-disable-next-line no-console
//       console.error('create profile failed');
//     }

//     yield put(actions.transaction.createTransaction());
//   } catch (error) {
//     // eslint-disable-next-line no-console
//     console.log(error);
//   }
// }
