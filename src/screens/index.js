import { Navigation, } from 'react-native-navigation';
import { gestureHandlerRootHOC, } from 'react-native-gesture-handler';

import ScreenIDs from './ScreenIDs';
import { screenHOC, } from '../custom-navigation';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import MyOrderScreen from './MyOrderScreen';
import ProfileScreen from './ProfileScreen';
import StoreMenuScreen from './StoreMenuScreen';
import MapScreen from './MapScreen';
import OrderDetailScreen from './OrderDetailScreen';
import MarkerDetailScreen from './MarkerDetailScreen';
import CartScreen from './CartScreen';

const screens = {
  [ScreenIDs.LoginScreen]: LoginScreen,
  [ScreenIDs.HomeScreen]: HomeScreen,
  [ScreenIDs.MyOrderScreen]: MyOrderScreen,
  [ScreenIDs.ProfileScreen]: ProfileScreen,
  [ScreenIDs.StoreMenuScreen]: StoreMenuScreen,
  [ScreenIDs.MapScreen]: MapScreen,
  [ScreenIDs.OrderDetailScreen]: OrderDetailScreen,
  [ScreenIDs.MarkerDetailScreen]: MarkerDetailScreen,
  [ScreenIDs.CartScreen]: CartScreen,
};

const registerScreens = (Provider, store) => {
  const enhancers = screenHOC(Provider, store);
  Object.keys(screens).map((screenID) => {
    Navigation.registerComponent(screenID, () =>
      gestureHandlerRootHOC(enhancers(screens[screenID]))
    );
  });
};

export { screens, ScreenIDs, registerScreens };
