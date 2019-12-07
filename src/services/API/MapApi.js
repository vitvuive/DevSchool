// import { Linking, NativeModules, } from 'react-native';
import { ConfigApi, } from 'src/values';

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        alert('You need turn on Location to use app');
        reject(error.message);
      }
    );
  });
}

const getShopByLocation = ({ tokenUser, }) => {
  return fetch(
    `http://${ConfigApi.portIP}/api/v1/shops/scan?lat=129.2810962991772&long=35.70755716786023&rad=10000`,
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
