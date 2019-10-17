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
              options: {
                topBar: {
                  title: {
                    text: 'Login to account',
                  },
                },
              },
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
