const Types = {
  SET_AUTH_LOADING_STATUS: 'global.SET_AUTH_LOADING_STATUS',
  SET_POSITION: 'global.SET_POSITION',
};

const Actions = {
  setAuthLoadingStatus: (payload: boolean = false) => ({
    type: Types.SET_AUTH_LOADING_STATUS,
    payload,
  }),
  setPositionUser: (payload: Object = {}) => ({
    type: Types.SET_POSITION,
    payload,
  }),
};

export { Types, Actions };
