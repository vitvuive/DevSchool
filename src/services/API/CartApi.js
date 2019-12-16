import { creatRequest, REQUEST_TYPE, } from './Utils';

const addCartItem = ({ authKey, params = {}, body = {}, }) => {
  const { idTransaction, } = params;
  return creatRequest({
    endpoint: `/api/v1/transactions/${idTransaction}`,
    type: REQUEST_TYPE.PUT,
    authKey,
    body,
  });
};

export default {
  addCartItem,
};
