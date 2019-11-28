const Types = {
  SET_CART_LOADING_STATUS: 'cart.SET_CART_LOADING_STATUS',
  SET_CART_DATA: 'cart.SET_CART_DATA',

  //saga
  ADD_ITEM_TO_CART: 'cart@ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'cart@REMOVE_ITEM_FROM_CART',
  GET_CART_DATA: 'cart@GET_CART_DATA',
};

const Actions = {
  setCartLoadingStatus: (payload: boolean = false) => ({
    type: Types.SET_CART_LOADING_STATUS,
    payload,
  }),
  setCartData: (item: Object = {}) => ({
    type: Types.SET_CART_DATA,
    payload: item,
  }),
  //saga
  addItemToCart: (payload: { name: String, price: Number, url: String }) => ({
    type: Types.ADD_ITEM_TO_CART,
    payload,
  }),
  //saga
  removeItemFromCart: (payload: Object = {}) => ({
    type: Types.REMOVE_ITEM_FROM_CART,
    payload,
  }),
  getCartData: () => ({
    type: Types.GET_CART_DATA,
  }),
};

export { Types, Actions };
