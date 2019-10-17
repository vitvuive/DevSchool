import { combineReducers, } from 'redux';

import { userActions, userReducers, userSelectors, userTypes, } from './user';

const rootReducer = combineReducers({
  user: userReducers,
});

const types = {
  user: userTypes,
};

const actions = {
  user: userActions,
};

const selectors = {
  user: userSelectors,
};

export { rootReducer, types, actions, selectors };
