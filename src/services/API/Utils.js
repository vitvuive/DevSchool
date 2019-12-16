import { ConfigApi, } from 'src/values';
import { Logger, } from 'src/log-services';

export const REQUEST_TYPE = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
};

export const creatRequest = ({
  endpoint,
  body,
  type,
  headers = {},
  authKey,
}): Promise => {
  const _url = `http://${ConfigApi.portIP}${endpoint}`;
  const _body = body ? JSON.stringify(body) : undefined;

  Logger.info('Request API', {
    type: Logger.InfoTypes.request,
    at: 'Meety API',
    url: _url,
    body: _body,
    authKey,
  });

  return fetch(_url, {
    method: type,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',

      ...headers,
      ...(authKey ? { Authorization: `Bearer ${authKey}`, } : {}),
    },
    ...(_body !== undefined ? { body: _body, } : {}),
  });
};
