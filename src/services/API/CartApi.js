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

export default { getCartData, removeCartItem, };
