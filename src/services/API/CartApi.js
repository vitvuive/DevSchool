import { ConfigApi, } from 'src/values';

const getCartData = () => {
  return fetch('http://5dbaa6563ec5fb0014319176.mockapi.io/api/v1/cart', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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

const removeCartItem = (id) => {
  return fetch(`http://5dbaa6563ec5fb0014319176.mockapi.io/api/v1/cart/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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

const addCartItem = ({ shopId, item, tokenUser, idTransaction, }) => {
  return fetch(
    `http://${ConfigApi.portIP}/api/v1/transactions/${idTransaction}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenUser}`,
      },
      body: JSON.stringify({
        shop: shopId,
        item,
      }),
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

const checkOut = () => {
  return fetch('http://5dbaa6563ec5fb0014319176.mockapi.io/api/v1/order', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      createAt: '2019-11-29T04:19:53.515Z',
      nameMerchant: 'Coffee house',
      address: '200 Hai Ba Trung str',
      item: [1, 2, 3,],
    }),
  })
    .then((reponse) => reponse.json())
    .then((json) => {
      return json;
    })
    .catch((e) => {
      return e;
    });
};

const getTransaction = () => {
  return fetch('http://5dbaa6563ec5fb0014319176.mockapi.io/api/v1/order', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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

export default {
  getCartData,
  removeCartItem,
  addCartItem,
  checkOut,
  getTransaction,
};
