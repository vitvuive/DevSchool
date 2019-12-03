import Immutable from 'seamless-immutable';
import { createReducer, } from '../helper-function';
import { Types, } from './actions';

const initState = Immutable({
  isLoading: false,
  byId: {},
});

const reducer = createReducer(initState, {
  [Types.SET_MENU_LOADING_STATUS]: ({ state, action, }) => {
    return state.merge({ isLoading: action.payload, });
  },
  [Types.SET_MENU_DATA_BY_ID]: ({ state, action, }) => {
    if (typeof action.payload !== 'object') return state;
    return state.set('byId', action.payload); // merge by id
  },
});

export default reducer;
