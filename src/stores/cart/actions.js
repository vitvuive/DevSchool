const TypesReducer = {
  SET_CART_LOADING_STATUS: 'cart.SET_CART_LOADING_STATUS',
  SET_CART_DATA: 'cart.SET_CART_DATA',
  SET_TRANSACTION: 'cart.SET_TRANSACTION',
};

const TypesSaga = {
  ADD_ITEM_TO_CART: 'cart@ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'cart@REMOVE_ITEM_FROM_CART',
  GET_CART_DATA: 'cart@GET_CART_DATA',
  CHECK_OUT: 'cart@CHECK_OUT',
  GET_TRANSACTION: 'cart@GET_TRANSACTION',
};

const Types = { ...TypesReducer, ...TypesSaga, };

const ActionsReducer = {
  setCartLoadingStatus: (payload: boolean = false) => ({
    type: Types.SET_CART_LOADING_STATUS,
    payload,
  }),
  setCartData: (item: Object = {}) => ({
    type: Types.SET_CART_DATA,
    payload: item,
  }),
  setTransaction: (payload: Object = {}) => ({
    type: Types.SET_TRANSACTION,
    payload,
  }),
};

const ActionsSaga = {
  addItemToCart: (payload: { id: Number, shopId: Number }) => ({
    type: Types.ADD_ITEM_TO_CART,
    payload,
  }),
  removeItemFromCart: (payload: Object = {}) => ({
    type: Types.REMOVE_ITEM_FROM_CART,
    payload,
  }),
  getCartData: () => ({
    type: Types.GET_CART_DATA,
  }),
  getTransactionData: () => ({
    type: Types.GET_TRANSACTION,
  }),
  checkOut: (payload: {
    createdAt: Number,
    nameMerchant: String,
    address: String,
    item: Array
  }) => ({
    type: Types.CHECK_OUT,
    payload,
  }),
};

const Actions = { ...ActionsReducer, ...ActionsSaga, };

export { Types, Actions };
