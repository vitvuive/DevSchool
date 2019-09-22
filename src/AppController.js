import { Navigation, } from 'react-native-navigation';

import ScreenIDs from './screens/ScreenIDs';

export const startLogin = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ScreenIDs.LoginScreen,
            },
          },
        ],
      },
    },
  });
};

export const startMainApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ScreenIDs.HomeScreen,
            },
          },
        ],
      },
    },
  });
};
