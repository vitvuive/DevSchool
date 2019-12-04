import { ConfigApi, } from 'src/values';

const getMenuByCategory = ({ categoryId, merchantId, tokenUser, }) => {
  return fetch(
    `http://${ConfigApi.portIP}:8000/api/v1/items/${merchantId}?category=${categoryId}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenUser}`,
      },
    }
  )
    .then((reponse) => reponse.json())
    .then((json) => {
      return json;
    })
    .catch((e) => {
      return e;
    });
};

const getCategoryByMerchant = ({ merchantId, tokenUser, }) => {
  return fetch(
    `http://${ConfigApi.portIP}:8000/api/v1/merchants/${merchantId}/category`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenUser}`,
      },
    }
  )
    .then((reponse) => reponse.json())
    .then((json) => {
      return json;
    })
    .catch((e) => {
      return e;
    });
};

export default { getMenuByCategory, getCategoryByMerchant, };
