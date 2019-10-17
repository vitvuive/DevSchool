const createReducer = (initialState: Object, handlers: Object) => (
  state: Object = initialState,
  action: Object
) => {
  const { type, } = action;
  // Do nothing and return the state found no handler
  if (!handlers.hasOwnProperty(type)) return state;

  return handlers[action.type]({ state, action, });
};

export default createReducer;
