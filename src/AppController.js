import { Navigation, } from 'react-native-navigation';

import ScreenIDs from './screens/ScreenIDs';

import { IconAssets, } from './assets';

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
                        icon: IconAssets.Home,
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            component: {
              name: ScreenIDs.SearchScreen,
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'Search',
                  icon: IconAssets.Search,
                },
              },
            },
          },
          {
            component: {
              name: ScreenIDs.NotificationScreen,
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'Profile',
                  icon: IconAssets.Notification,
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
