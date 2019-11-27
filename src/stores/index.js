import { combineReducers, } from 'redux';

import { userActions, userReducers, userSelectors, userTypes, } from './user';
import { cartActions, cartReducers, cartTypes, cartSelectors, } from './cart';
import {
  globalActions,
  globalReducer,
  globalSelectors,
  globalTypes,
} from './global';

const rootReducer = combineReducers({
  user: userReducers,
  global: globalReducer,
  cart: cartReducers,
});

const types = {
  user: userTypes,
  global: globalTypes,
  cart: cartTypes,
};

const actions = {
  user: userActions,
  global: globalActions,
  cart: cartActions,
};

const selectors = {
  user: userSelectors,
  global: globalSelectors,
  cart: cartSelectors,
};

export { rootReducer, types, actions, selectors };
