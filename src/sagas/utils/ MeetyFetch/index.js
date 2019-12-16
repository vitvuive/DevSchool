import { select, call, delay, race, } from 'redux-saga/effects';
import { selectors, } from 'src/stores';

import commonStatusCodeHandlers from './commonStatusCodeHandle';
import { Logger, ErrorMessage, } from 'src/log-services';

const TIMEOUT_DURATION = 10000;

function* meetyFetch({
  apiFunc,
  postBody,
  params,
  headers,
  // statusHandlers = {},
  timeoutDuration = TIMEOUT_DURATION,
}: {
  apiFunc: Function,
  postBody: Object,
  params: Object,
  headers: Object,
  statusHandlers: Object,
  timeoutDuration: Number
}) {
  const authKey = yield select(selectors.user.getTokenUser);
  const apiParams = {
    authKey,
    params,
    headers,
    body: postBody || {},
  };

  const { response, timeout, } = yield race({
    response: call(apiFunc, apiParams),
    timeout: delay(timeoutDuration, true),
  });

  if (timeout) {
    Logger.error(
      new Error(ErrorMessage.TIMEOUT_ERROR),
      {
        at: 'MeetyFetch',
        apiName: apiFunc.apiName,
      },
      'info'
    );
  }

  const { status, } = response;

  const statusCodeHandler = commonStatusCodeHandlers[status];

  if (typeof statusCodeHandler === 'function') {
    return yield call(statusCodeHandler, { response, name: apiFunc.apiName, });
  }

  // No error thrown at this point, return data
  return yield response.json();
}

export default meetyFetch;
