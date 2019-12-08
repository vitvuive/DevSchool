import { Dimensions, } from 'react-native';
import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import { selectors, actions, } from 'src/stores';

import MapScreen from './MapScreen';
import ScreenIDs from '../ScreenIDs';

let { width, height, } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mapStateToProps = (state) => {
  const longitude = selectors.map.getLongitude(state); //TODO: get send to api get shop by location
  const latitude = selectors.map.getLatitude(state);
  const dataShop = selectors.map.getListShopNearTo(state);

  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  return {
    region,
    longitude,
    latitude,
    dataShop,
  };
};

const mapDispatchToProps = (dispatch, { componentId, }) => {
  const callback = () => {
    dispatch(actions.map.setPositionUser());
    dispatch(actions.map.getShopByLocation());
  };

  const onPressPush = async (dataShop) => {
    try {
      await Navigation.push(componentId, {
        component: {
          name: ScreenIDs.MarkerDetailScreen,
          passProps: {
            dataShop,
          },
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return {
    callback,
    onPressPush,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
