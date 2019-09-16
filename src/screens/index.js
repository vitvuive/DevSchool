import { Navigation } from "react-native-navigation";

import ScreenIDs from "./ScreenIDs";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const screens = {
  [ScreenIDs.LoginScreen]: LoginScreen,
  [ScreenIDs.HomeScreen]: HomeScreen
};

const registerScreens = () => {
  Navigation.registerComponent("LoginScreen", () => LoginScreen);
  Navigation.registerComponent("HomeScreen", () => HomeScreen);
};

export { ScreenIDs, registerScreens };
