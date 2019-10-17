const Types = {
  //Auth
  SET_AUTH_LOADING_STATUS: 'user.SET_AUTH_LOADING_STATUS',
  SET_PROFILE: 'user.SET_AUTH_PROFILE',
  SET_AUTH_DATA: 'user.SET_AUTH_DATA',
  //TODO: Set update data
  //sagas
  LOGIN: 'user@LOGIN',
  LOGOUT: 'user@LOGOUT',
};

const Actions = {
  setAuthLoadingStatus: (payload: Boolean = false) => ({
    type: Types.SET_AUTH_LOADING_STATUS,
    payload,
  }),
  setProfile: (payload: Object = {}) => ({
    type: Types.SET_PROFILE,
    payload,
  }),
  setAuthData: (payload: Object = {}) => ({
    type: Types.SET_AUTH_DATA,
    payload,
  }),
  login: (payload: { username: String, password: String }) => ({
    type: Types.LOGIN,
    payload,
  }),
  logout: () => ({
    type: Types.LOGOUT,
  }),
};

export { Types, Actions };
