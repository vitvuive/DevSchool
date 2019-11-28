import { connect, } from 'react-redux';
import { Linking, } from 'react-native';
import { Navigation, } from 'react-native-navigation';

import { Metrics, } from 'src/theme';
import ScreenIDs from 'src/screens/ScreenIDs';
import Fonts from 'src/theme/Fonts';

import MarkerDetailScreen from './MarkerDetailScreen';

const mapDispatchToProps = (dispatch, { componentId, reponse, }) => {
  const onPush = async () => {
    try {
      await Navigation.push(componentId, {
        component: {
          name: ScreenIDs.StoreMenuScreen,
          passProps: {
            category: reponse.merchant.category,
          },
          options: {
            topBar: {
              title: {
                text: reponse.merchant.name,
                alignment: 'center',
                fontFamily: Fonts.Default.medium,
              },
            },
            bottomTabs: {
              visible: false,
              drawBehind: true,
              animate: true,
            },
          },
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const onDirection = (lat, long, name) => {
    const latLng = `${lat},${long}`;

    const url = Metrics.isAndroid
      ? `geo:0,0?q=${latLng}(${name})`
      : `maps:0,0?q=${latLng}(${name})`;
    Linking.openURL(url);
  };
  return { onDirection, onPush, };
};

export default connect(mapDispatchToProps)(MarkerDetailScreen);
