const TypesReducer = {
  SET_LOADING_STATUS: 'transaction.SET_LOADING_STATUS',
  SET_TRANSACTION_DATA: 'transaction.SET_TRANSACTION_DATA',
  SET_HISTORY_DATA: 'transaction.SET_HISTORY_DATA',
};

const TypesSaga = {
  GET_TRANSACTION_DATA: 'transaction.GET_TRANSACTION_DATA',
};

const ActionsReducer = {
  setTransactionLoadingStatus: (payload: Boolean = false) => ({
    type: Types.SET_LOADING_STATUS,
    payload,
  }),

  setTransactionData: (payload: Object = {}) => ({
    type: Types.SET_TRANSACTION_DATA,
    payload,
  }),

  setHistoryData: (payload: Object = {}) => ({
    type: TypesReducer.SET_HISTORY_DATA,
    payload,
  }),
};

const ActionsSaga = {
  getTransactionData: () => ({
    type: TypesSaga.GET_TRANSACTION_DATA,
  }),
};

const Types = { ...TypesReducer, ...TypesSaga, };

const Actions = { ...ActionsReducer, ...ActionsSaga, };

export { Types, Actions };
