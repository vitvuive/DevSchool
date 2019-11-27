import Immutable from 'seamless-immutable';
import { createReducer, } from '../helper-function';
import { Types, } from './actions';

const initState = Immutable({
  isLoading: false,
  byId: {},
});

const reducer = createReducer(initState, {
  [Types.SET_CART_LOADING_STATUS]: ({ state, action, }) => {
    return state.merge({ isLoading: action.payload, });
  },
  [Types.SET_CART_DATA]: ({ state, action, }) => {
    return state.merge({ byId: action.payload, });
  },
  [Types.ADD_ITEM_TO_CART]: ({ state, action, }) => {
    return state.merge({ byId: action.payload, });
  },
});

export default reducer;
