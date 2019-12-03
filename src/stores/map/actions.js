const TypesReducer = {
  SET_AUTH_LOADING_STATUS: 'map.SET_AUTH_LOADING_STATUS',
  SET_POSITION: 'map.SET_POSITION',
  SET_SHOP_DATA: 'map.SET_SHOP_DATA',
};

const TypesSaga = {
  GET_SHOP_BY_LOCATION: 'map@GET_SHOP_BY_LOCATION',
};

const Types = { ...TypesReducer, ...TypesSaga, };

const ActionsReducer = {
  setMapLoadingStatus: (payload: boolean = false) => ({
    type: Types.SET_AUTH_LOADING_STATUS,
    payload,
  }),
  setPositionUser: (payload: Object = {}) => ({
    type: Types.SET_POSITION,
    payload,
  }),
  setShopData: (payload: Array = []) => ({
    type: TypesReducer.SET_SHOP_DATA,
    payload,
  }),
};

const ActionsSaga = {
  getShopByLocation: () => ({
    type: TypesSaga.GET_SHOP_BY_LOCATION,
  }),
};

const Actions = { ...ActionsReducer, ...ActionsSaga, };
export { Types, Actions };
