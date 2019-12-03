import Immutable from 'seamless-immutable';
import { createReducer, } from '../helper-function';
import { Types, } from './actions';

const initState = Immutable({
  isLoading: false,
  data: {},
  historyList: {},
});

const reducer = createReducer(initState, {
  [Types.SET_MENU_LOADING_STATUS]: ({ state, action, }) => {
    return state.merge({ isLoading: action.payload, });
  },
  [Types.SET_TRANSACTION_DATA]: ({ state, action, }) => {
    return state.set('data', action.payload); // merge by id
  },
  [Types.SET_HISTORY_DATA]: ({ state, action, }) => {
    return state.set('historyList', action.payload); // merge by id
  },
});

export default reducer;
