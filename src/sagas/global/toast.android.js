import { actionChannel, call, take, delay, } from 'redux-saga/effects';
import { ToastAndroid, } from 'react-native';

import { types, } from 'src/stores';
import { Logger, } from 'src/log-services';

function* handleToast({ payload, }) {
  try {
    const { message, duration, } = payload;
    if (!message) throw new Error('No message in payload');
    if (!duration) throw new Error('No duration in payload');

    ToastAndroid.show(message, duration);

    yield delay(duration);
  } catch (error) {
    Logger.error(error, { at: 'handleToast', }, 'error');
  }
}

function* watchToast() {
  const channel = yield actionChannel(types.global.TOAST_MESSAGE);

  while (true) {
    const action = yield take(channel);
    yield call(handleToast, action);
  }
}

export default [watchToast,];
