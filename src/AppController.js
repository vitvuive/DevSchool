import { Navigation, } from 'react-native-navigation';

import ScreenIDs from 'src/screens/ScreenIDs';

import { IconAssets, } from 'src/assets';
import { Colors, } from './theme';
import Fonts from './theme/Fonts';

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
                  visible: false,
                  height: 0,
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
        options: {
          bottomTabs: {
            backgroundColor: 'white',
            animate: true,
          },
        },
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
                        text: 'Promotion',
                        fontSize: 10,
                        fontFamily: Fonts.Default.regular,
                        icon: IconAssets.Promotion,
                        selectedIconColor: Colors.primary,
                        selectedTextColor: Colors.primary,
                        iconColor: Colors.inActiveBtmTabColor,
                      },
                      topBar: {
                        visible: false,
                        height: 0,
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: ScreenIDs.MapScreen,
                    passProps: {
                      text: 'This is tab 2',
                    },
                    options: {
                      topBar: {
                        visible: false,
                        height: 0,
                      },
                      bottomTab: {
                        text: 'Near By',
                        icon: IconAssets.Map,
                        fontSize: 10,
                        fontFamily: Fonts.Default.regular,
                        selectedIconColor: Colors.primary,
                        selectedTextColor: Colors.primary,
                        iconColor: Colors.inActiveBtmTabColor,
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: ScreenIDs.ProfileScreen,
                    passProps: {
                      text: 'This is tab 2',
                    },
                    options: {
                      topBar: {
                        visible: false,
                        height: 0,
                      },
                      bottomTab: {
                        text: 'Account',
                        fontSize: 10,
                        fontFamily: Fonts.Default.regular,
                        icon: IconAssets.Profile,
                        selectedIconColor: Colors.primary,
                        selectedTextColor: Colors.primary,
                        iconColor: Colors.inActiveBtmTabColor,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
};
