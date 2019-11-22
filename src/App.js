import { registerScreens, } from './screens';
import * as AppController from './AppController';
import { startSagas, store, Provider, rehydrateStore, } from './redux-config';
import { selectors, } from './stores';

registerScreens(Provider, store);

async function startApp() {
  await rehydrateStore(store);
  startSagas();

  const isExitsUser = selectors.user.isUserExists(store.getState());
  if (isExitsUser) {
    AppController.startMainApp();
  } else {
    AppController.startMainApp();
    // AppController.startLogin();
  }
}

export default { start: startApp, };
