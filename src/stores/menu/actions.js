const TypesReducer = {
  SET_MENU_LOADING_STATUS: 'menu.SET_MENU_LOADING_STATUS',
  SET_MENU_DATA_BY_ID: 'menu.SET_MENU_DATA_BY_ID',
  SET_CATEGORY_LIST: 'menu.SET_CATEGORY_LIST',
};

const TypesSaga = {
  GET_LIST_MENU_BY_CATEGORY: 'menu@GET_LIST_MENU_BY_CATEGORY',
  GET_LIST_CATEGORY_BY_MERCHANT: 'menu@GET_LIST_CATEGORY_BY_MERCHANT',
};

const ActionsReducer = {
  setLoadingStatus: (payload: boolean = false) => ({
    type: TypesReducer.SET_MENU_LOADING_STATUS,
    payload,
  }),

  setMenuDataById: (payload: Object = {}) => ({
    type: TypesReducer.SET_MENU_DATA_BY_ID,
    payload,
  }),

  setCategoryByMerchant: (payload: Object = {}) => ({
    type: TypesReducer.SET_CATEGORY_LIST,
    payload,
  }),
};

const ActionsSaga = {
  getListMenuByCategory: (payload: {
    categoryId: String,
    merchantId: String
  }) => ({
    type: TypesSaga.GET_LIST_MENU_BY_CATEGORY,
    payload,
  }),

  getListCategoryByMerchant: (payload: String) => ({
    type: TypesSaga.GET_LIST_CATEGORY_BY_MERCHANT,
    payload,
  }),
};

const Types = { ...TypesReducer, ...TypesSaga, };
const Actions = { ...ActionsReducer, ...ActionsSaga, };

export { Types, Actions };
