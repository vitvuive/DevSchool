import { combineReducers, } from 'redux';

import { userActions, userReducers, userSelectors, userTypes, } from './user';
import { cartActions, cartReducers, cartTypes, cartSelectors, } from './cart';
import { mapActions, mapReducer, mapSelectors, mapTypes, } from './map';
import { menuActions, menuReducer, menuSelectors, menuTypes, } from './menu';
import {
  transactionReducer,
  transactionsAction,
  transactionsSelector,
  transactionsType,
} from './transaction';

const rootReducer = combineReducers({
  user: userReducers,
  map: mapReducer,
  cart: cartReducers,
  menu: menuReducer,
  transaction: transactionReducer,
});

const types = {
  user: userTypes,
  map: mapTypes,
  cart: cartTypes,
  menu: menuTypes,
  transaction: transactionsType,
};

const actions = {
  user: userActions,
  map: mapActions,
  cart: cartActions,
  menu: menuActions,
  transaction: transactionsAction,
};

const selectors = {
  user: userSelectors,
  map: mapSelectors,
  cart: cartSelectors,
  menu: menuSelectors,
  transaction: transactionsSelector,
};

export { rootReducer, types, actions, selectors };
