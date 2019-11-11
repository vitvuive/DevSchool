import { connect, } from 'react-redux';

import { selectors, actions, } from 'src/stores';

import MapScreen from './MapScreen';

const dataFake = [
  {
    latitude: 10.8403397,
    longitude: 106.6797019,
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
    latitude: 10.8403429,
    longitude: 1573395587397,
    address: 'acv',
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
    latitude: 10.1233397,
    longitude: 106.6797019,
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
const mapStateToProps = (state) => ({
  longitude: selectors.global.getTimestamp(state),
  latitude: selectors.global.getLatitude(state),
  dataFake,
});

const mapDispatchToProps = (dispatch) => ({
  getLocation: () => dispatch(actions.global.setPositionUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen);
