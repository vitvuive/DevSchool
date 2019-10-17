import { createReducer, } from '../helper-function';
import { Types, } from './actions';

const initState = {
  isLoading: false,
  profile: {},
  auth: {},
};

const reducer = createReducer(initState, {
  [Types.SET_AUTH_LOADING_STATUS]: ({ state, actions, }) => {
    return state.merge({ isLoading: actions.payload, });
  },
  [Types.SET_PROFILE]: ({ state, actions, }) => {
    return state.merge({ profile: actions.payload, });
  },
  [Types.SET_AUTH_DATA]: ({ state, actions, }) => {
    return state.merge({ auth: actions.payload, });
  },
});

export default reducer;
