import Immutable from 'seamless-immutable';
import { createReducer, } from '../helper-function';
import { Types, } from './actions';

const initState = Immutable({
  isLoading: false,
  position: {},
});

const reducer = createReducer(initState, {
  [Types.SET_AUTH_LOADING_STATUS]: ({ state, action, }) => {
    return state.merge({ isLoading: action.payload, });
  },
  [Types.SET_POSITION]: ({ state, action, }) => {
    return state.merge({ position: action.payload, });
  },
});

export default reducer;
