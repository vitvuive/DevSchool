import { LoginManager, AccessToken, } from 'react-native-fbsdk';
import { ConfigApi, } from 'src/values';

const logInWithPermissions = () => {
  return LoginManager.logInWithPermissions(['public_profile',]);
};

const getCurrentAccessToken = () => {
  return AccessToken.getCurrentAccessToken();
};

function getInfoUserFb(token) {
  return fetch(
    'https://graph.facebook.com/v2.5/me?fields=email,name,picture,friends&access_token=' +
      token
  )
    .then((response) => response.json())
    .then(
      (json) =>
        new Promise((resolve, reject) => {
          resolve(json);
          reject(new Error('Fetch error'));
        })
    )
    .catch();
}

const logOut = () => {
  return LoginManager.logOut();
};

const loginWithAccount = ({ username, password, }) => {
  return fetch(`http://${ConfigApi.portIP}:8000/auth/jwt/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((reponse) => reponse.json())
    .then((json) => {
      return json;
    })
    .catch((e) => {
      return e;
    });
};

const createWithAccount = ({ username, password, email, }) => {
  return fetch(`http://${ConfigApi.portIP}:8000/auth/users/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  })
    .then((reponse) => reponse.json())
    .then((json) => {
      return json;
    })
    .catch((e) => {
      return e;
    });
};

export default {
  logInWithPermissions,
  getCurrentAccessToken,
  getInfoUserFb,
  logOut,
  loginWithAccount,
  createWithAccount,
};
