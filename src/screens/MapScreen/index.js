import { Dimensions, } from 'react-native';
import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import Fonts from 'src/theme/Fonts';
import { selectors, actions, } from 'src/stores';
import { ImageAssets, } from 'src/assets';

import MapScreen from './MapScreen';
import ScreenIDs from '../ScreenIDs';

let { width, height, } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const dataFake = [
  {
    latitude: 10.7747201,
    longitude: 106.69930120000004,
    address: '135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1, Hồ Chí Minh',
    banner: ImageAssets.Card3,
    merchant: {
      name: 'HightLand',
      menu: [
        { name: 'cafe', price: 40000, categories: 'cf', merchant: 'TCH', },
        { name: 'tra sua', price: 20000, categories: 'ts', merchant: 'TCH', },
        { name: 'match', price: 50000, categories: 'mt', merchant: 'TCH', },
        { name: 'sinh to', price: 70000, categories: 'st', merchant: 'TCH', },
      ],
    },
  },

  {
    latitude: 10.78006,
    longitude: 106.69341,
    address: 'Turtle Lake, phường 6, District 3, Ho Chi Minh City',
    banner: ImageAssets.Card2,
    merchant: {
      name: 'The coffe house',
      menu: [
        { name: 'cafe', price: 40000, categories: 'cf', merchant: 'TCH', },
        { name: 'tra sua', price: 20000, categories: 'ts', merchant: 'TCH', },
        { name: 'match', price: 50000, categories: 'mt', merchant: 'TCH', },
        { name: 'sinh to', price: 70000, categories: 'st', merchant: 'TCH', },
      ],
    },
  },
  {
    latitude: 10.7951612,
    longitude: 106.7195944,
    address: '208 Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, Hồ Chí Minh',
    banner: ImageAssets.Card5,
    merchant: {
      name: 'Gongcha',
      menu: [
        { name: 'cafe', price: 40000, categories: 'cf', merchant: 'TCH', },
        { name: 'tra sua', price: 20000, categories: 'ts', merchant: 'TCH', },
        { name: 'match', price: 50000, categories: 'mt', merchant: 'TCH', },
        { name: 'sinh to', price: 70000, categories: 'st', merchant: 'TCH', },
      ],
    },
  },
];
const mapStateToProps = (state) => {
  const longitude = selectors.global.getLongitude(state);
  const latitude = selectors.global.getLatitude(state);

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
    dataFake,
  };
};

// const mapDispatchToProps = dispatch => ({
//   getLocation: () => dispatch(actions.global.setPositionUser())
// });

const mapDispatchToProps = (dispatch, { componentId, }) => {
  const getLocation = () => {
    dispatch(actions.global.setPositionUser());
  };
  const onPressPush = async (reponse) => {
    try {
      await Navigation.push(componentId, {
        component: {
          name: ScreenIDs.MarkerDetailScreen,
          passProps: {
            reponse,
          },
          options: {
            topBar: {
              title: {
                text: reponse.merchant.name,
                alignment: 'center',
                fontFamily: Fonts.Default.medium,
              },
            },
          },
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return {
    getLocation,
    onPressPush,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
