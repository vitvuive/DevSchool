import { Dimensions, } from 'react-native';
import { connect, } from 'react-redux';

import { selectors, actions, } from 'src/stores';

import MapScreen from './MapScreen';

let { width, height, } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const dataFake = [
  {
    latitude: 10.7747201,
    longitude: 106.69930120000004,
    address: 'acv',
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
    address: 'Turtle Lake',
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
    address: 'acv',
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

const mapDispatchToProps = (dispatch) => ({
  getLocation: () => dispatch(actions.global.setPositionUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
