import { put, select, } from 'redux-saga/effects';
import { actions, selectors, } from 'src/stores';

import { ErrorMessage, Logger, } from 'src/log-services';

function createUnexpectedErrorHandler(
  httpCode,
  displayError: string,
  shouldLogout: boolean = false
) {
  return function* handler({ response, name, }) {
    try {
      const result = yield response.json();

      if (shouldLogout) {
        const authKey = yield select(selectors.user.getAuthKey);

        // Log force logout event
        Logger.error(
          new Error('Force logout trigger'),
          {
            at: 'commonStatusCodeHandlers',
            httpCode,
            apiResult: JSON.stringify(result),
            authKey,
            apiName: name,
          },
          'info'
        );
      } else {
        // Log un-expected error
        Logger.error(new Error(JSON.stringify(result)), {
          at: 'commonStatusCodeHandlers',
          httpCode,
          apiName: name,
        });
      }
    } catch (error) {
      Logger.error(
        new Error('Encounter error when parsing the reponse data', {
          at: 'commonStatusCodeHandlers',
          httpCode,
          apiName: name,
        })
      );
    }
    if (shouldLogout) yield put(actions.user.logout());
    throw new Error(displayError);
  };
}

export default {
  '400': createUnexpectedErrorHandler(
    400,
    ErrorMessage.UNEXPECTED_RESPONSE_ERROR_MSG
  ),
  '401': createUnexpectedErrorHandler(
    401,
    ErrorMessage.TOKEN_INVALID_ERROR_MSG,
    true
  ),
  '403': createUnexpectedErrorHandler(
    403,
    ErrorMessage.TOKEN_INVALID_ERROR_MSG,
    true
  ),
  '404': createUnexpectedErrorHandler(
    404,
    ErrorMessage.UNEXPECTED_RESPONSE_ERROR_MSG
  ),
  '500': createUnexpectedErrorHandler(
    500,
    ErrorMessage.UNEXPECTED_RESPONSE_ERROR_MSG
  ),
};
