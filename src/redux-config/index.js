import { createStore, applyMiddleware, compose, } from 'redux';
import { Provider, } from 'react-redux';
import { autoRehydrate, } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { rootReducer, } from '../stores';
import rootSagas from '../sagas';

import rehydrateStore from './rehydrateStore';

// middlw ware
const sagaMiddleWare = createSagaMiddleware();
const middleware = [thunk, sagaMiddleWare,];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  autoRehydrate()
);

// create store
const store = createStore(rootReducer, enhancer);
const startSagas = () => sagaMiddleWare.run(rootSagas);

export { store, startSagas, Provider, rehydrateStore };
