import { take, } from 'redux-saga/effects';

import { types, } from 'src/stores';
import { Logger, } from 'src/log-services';

function* watchToast() {
  while (true) {
    yield take(types.global.TOAST_MESSAGE);
    Logger.error(
      new Error('Toast saga is not implemented on iOS platform'),
      { at: 'handleToast', },
      'error'
    );
  }
}

export default [watchToast,];
