import { Navigation, } from 'react-native-navigation';

import ScreenIDs from 'src/screens/ScreenIDs';

import { IconAssets, } from 'src/assets';

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
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: ScreenIDs.HomeScreen,
                    passProps: {
                      text: 'This is tab 1',
                    },
                    options: {
                      bottomTab: {
                        text: 'Home',
                        icon: IconAssets.Promotion,
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            component: {
              name: ScreenIDs.MapScreen,
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'Map',
                  icon: IconAssets.Map,
                },
              },
            },
          },
          {
            component: {
              name: ScreenIDs.ProfileScreen,
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'Profile',
                  icon: IconAssets.Profile,
                },
              },
            },
          },
        ],
      },
    },
  });
};
