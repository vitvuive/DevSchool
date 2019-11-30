function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error.message);
      }
    );
  });
}

const getShopByLocation = () => {
  // console.log('location:', lat, long);
  return fetch(
    'http://127.0.0.1:8000/api/v1/shops/scan?lat=106.7135243&long=10.8015427&rad=10',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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
