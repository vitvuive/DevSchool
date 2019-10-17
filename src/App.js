import { registerScreens, } from './screens';
import * as AppController from './AppController';
import { startSagas, store, Provider, rehydrateStore, } from './redux-config';

registerScreens(Provider, store);

async function startApp() {
  await rehydrateStore(store);
  startSagas();
  AppController.startLogin();
}

export default { start: startApp, };
