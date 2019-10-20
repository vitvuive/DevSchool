import Immutable from 'seamless-immutable';
import { createReducer, } from '../helper-function';
import { Types, } from './actions';

const initState = Immutable({
  isLoading: false,
  profile: {},
  auth: {},
});

const reducer = createReducer(initState, {
  [Types.SET_AUTH_LOADING_STATUS]: ({ state, action, }) => {
    return state.merge({ isLoading: action.payload, });
  },
  [Types.SET_PROFILE]: ({ state, action, }) => {
    return state.merge({ profile: action.payload, });
  },
  [Types.SET_AUTH_DATA]: ({ state, action, }) => {
    return state.merge({ auth: action.payload, });
  },
});

export default reducer;
