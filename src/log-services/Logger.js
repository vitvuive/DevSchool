/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { YellowBox, } from 'react-native';

YellowBox.ignoreWarnings(['Failed child context type',]);

const InfoTypes = {
  error: 'error',
  log: 'log',
  navigation: 'navigation',
  process: 'process',
  request: 'request',
  state: 'state',
  user: 'user',
  manual: 'manual',
};

const InfoMetadata = {
  type:
    'error' |
    'log' |
    'navigation' |
    'process' |
    'request' |
    'state' |
    'user' |
    'manual',
  at: String,
};

const Severity = 'info' | 'warning' | 'error';

function info(msg: String, metadata: InfoMetadata = {}) {
  if (__DEV__) window.console.log('INFO:', msg, JSON.stringify(metadata));
}

function handleError(
  error,
  metadata: Object = {},
  severity: Severity = 'warning'
) {
  if (__DEV__) {
    const _msg =
      error instanceof Error
        ? error.message
        : typeof error === 'string'
          ? error
          : 'Unknown error';
    window.console.warn('ERROR:', _msg, JSON.stringify(metadata));
  } else {
    const _error = error instanceof Error ? error : new Error(error);
  }
}

export default { InfoTypes, error: handleError, info, };
