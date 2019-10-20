import { LoginManager, AccessToken, GraphRequest, } from 'react-native-fbsdk';

const logInWithPermissions = () => {
  return LoginManager.logInWithPermissions(['public_profile',]);
};

const getCurrentAccessToken = () => {
  return AccessToken.getCurrentAccessToken();
};
const getInfoUserFb = () => {
  const rs = new GraphRequest(
    '/me',
    {
      httpMethod: 'GET',
      version: 'v2.5',
      parameters: {
        fields: {
          string: 'email,name,friends',
        },
      },
    },
    (error, result) => {
      error, result;
    }
  );
  return rs.graphPath;
};

export default { logInWithPermissions, getCurrentAccessToken, getInfoUserFb, };
