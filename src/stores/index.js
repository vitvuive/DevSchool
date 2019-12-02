import { combineReducers, } from 'redux';

import { userActions, userReducers, userSelectors, userTypes, } from './user';
import { cartActions, cartReducers, cartTypes, cartSelectors, } from './cart';
import { mapActions, mapReducer, mapSelectors, mapTypes, } from './map';
import { menuActions, menuReducer, menuSelectors, menuTypes, } from './menu';

const rootReducer = combineReducers({
  user: userReducers,
  map: mapReducer,
  cart: cartReducers,
  menu: menuReducer,
});

const types = {
  user: userTypes,
  map: mapTypes,
  cart: cartTypes,
  menu: menuTypes,
};

const actions = {
  user: userActions,
  map: mapActions,
  cart: cartActions,
  menu: menuActions,
};

const selectors = {
  user: userSelectors,
  map: mapSelectors,
  cart: cartSelectors,
  menu: menuSelectors,
};

export { rootReducer, types, actions, selectors };
