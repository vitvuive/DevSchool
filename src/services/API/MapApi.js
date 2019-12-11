import { Alert, } from 'react-native';
import { ConfigApi, } from 'src/values';
import { LocationService, } from 'src/services';

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

const getShopByLocation = ({ tokenUser, lat, long, }) => {
  return fetch(
    `http://${ConfigApi.portIP}/api/v1/shops/scan?lat=${lat}&long=${long}&rad=100`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenUser}`,
      },
    }
  )
    .then((reponse) => reponse.json())
    .then((json) => {
      return json;
    })
    .catch((e) => {
      return e;
    });
};

export default { getCurrentPosition, getShopByLocation, };
