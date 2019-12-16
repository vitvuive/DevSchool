import { Alert, } from 'react-native';
import { LocationService, } from 'src/services';
import { creatRequest, REQUEST_TYPE, } from './Utils';

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        Alert.alert(
          'Allow Meety use your GPS',
          'We need your location to find shop around you',
          [{ text: 'OK', onPress: () => LocationService.checkLocation(), },]
        );

        reject(error.message);
      }
    );
  });
}

const getShopByLocation = ({ authKey, params, }) => {
  const { lat, long, } = params;
  return creatRequest({
    endpoint: `/api/v1/shops/scan?lat=${lat}&long=${long}&rad=10`,
    type: REQUEST_TYPE.GET,
    authKey,
  });
};

export default { getCurrentPosition, getShopByLocation, };
