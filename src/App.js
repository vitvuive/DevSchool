import { registerScreens } from "./screens";
import * as AppController from "./AppController";

registerScreens();

async function startApp() {
  AppController.startLogin();
}

export default { start: startApp };
