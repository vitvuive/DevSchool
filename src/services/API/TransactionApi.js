import { ConfigApi, } from 'src/values';

const getTransactionData = ({ tokenUser, }) => {
  return fetch(`http://${ConfigApi.portIP}/api/v1/transactions/1`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`,
    },
  })
    .then((reponse) => reponse.json())
    .then((json) => {
      return json;
    })
    .catch((e) => {
      return e;
    });
};

const postATransaction = ({ tokenUser, }) => {
  return fetch(`http://${ConfigApi.portIP}/api/v1/transactions/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenUser}`,
    },
  })
    .then((reponse) => reponse.json())
    .then((json) => {
      return json;
    })
    .catch((e) => {
      return e;
    });
};

export default { getTransactionData, postATransaction, };
