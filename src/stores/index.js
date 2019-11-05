import { combineReducers, } from 'redux';

import { userActions, userReducers, userSelectors, userTypes, } from './user';
import {
  globalActions,
  globalReducer,
  globalSelectors,
  globalTypes,
} from './global';

const rootReducer = combineReducers({
  user: userReducers,
  global: globalReducer,
});

const types = {
  user: userTypes,
  global: globalTypes,
};

const actions = {
  user: userActions,
  global: globalActions,
};

const selectors = {
  user: userSelectors,
  global: globalSelectors,
};

export { rootReducer, types, actions, selectors };
