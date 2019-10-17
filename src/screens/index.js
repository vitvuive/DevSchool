import { Navigation, } from 'react-native-navigation';

import ScreenIDs from './ScreenIDs';
import { screenHOC, } from '../custom-navigation';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const screens = {
  [ScreenIDs.LoginScreen]: LoginScreen,
  [ScreenIDs.HomeScreen]: HomeScreen,
};

const registerScreens = (Provider, store) => {
  const enhancers = screenHOC(Provider, store);
  Object.keys(screens).map((screenID) => {
    Navigation.registerComponent(screenID, () => enhancers(screens[screenID]));
  });
};

export { screens, ScreenIDs, registerScreens };
