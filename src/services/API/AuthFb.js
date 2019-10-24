import { LoginManager, AccessToken, } from 'react-native-fbsdk';

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

export default { logInWithPermissions, getCurrentAccessToken, getInfoUserFb, };
