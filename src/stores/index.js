import { combineReducers, } from 'redux';

import { userActions, userReducers, userSelectors, userTypes, } from './user';
import { cartActions, cartReducers, cartTypes, cartSelectors, } from './cart';
import { mapActions, mapReducer, mapSelectors, mapTypes, } from './map';

const rootReducer = combineReducers({
  user: userReducers,
  map: mapReducer,
  cart: cartReducers,
});

const types = {
  user: userTypes,
  map: mapTypes,
  cart: cartTypes,
};

const actions = {
  user: userActions,
  map: mapActions,
  cart: cartActions,
};

const selectors = {
  user: userSelectors,
  map: mapSelectors,
  cart: cartSelectors,
};

export { rootReducer, types, actions, selectors };
