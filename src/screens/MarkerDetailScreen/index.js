import { connect, } from 'react-redux';
import { Linking, } from 'react-native';
import { Navigation, } from 'react-native-navigation';

import { actions, } from 'src/stores';
import { Metrics, } from 'src/theme';
import ScreenIDs from 'src/screens/ScreenIDs';

import MarkerDetailScreen from './MarkerDetailScreen';

const mapDispatchToProps = (dispatch, { componentId, dataShop, }) => {
  const onPushToMenu = async () => {
    try {
      await Navigation.push(componentId, {
        component: {
          name: ScreenIDs.StoreMenuScreen,
          passProps: {
            dataShop,
          },
          options: {
            topBar: {
              visible: false,
              height: 0,
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

  const onGetCategoryList = () => {
    dispatch(actions.menu.getListCategoryByMerchant(dataShop.merchant.id));
  };

  return { onDirection, onPushToMenu, onGetCategoryList, };
};

export default connect(undefined, mapDispatchToProps)(MarkerDetailScreen);
