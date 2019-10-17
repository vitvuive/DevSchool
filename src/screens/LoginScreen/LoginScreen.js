/* eslint-disable no-console */
import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import {
  LoginButton,
  AccessToken,
  GraphRequestManager,
  GraphRequest,
} from 'react-native-fbsdk';

import { StyledButton, } from '../../shared-components';
import { Colors, } from '../../theme';
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      avatar_url: '',
      isShowAvatar: false,
    };
  }

  getInfoResponse = (error, result) => {
    if (error) {
      alert(error);
    } else {
      this.setState({ user_name: 'welcome ' + result.name, });
      this.setState({ avatar_url: result.picture.data.url, });
      this.setState({ isShowAvatar: true, });
      console.log(result);
    }
  };

  onLogout = () => {
    this.setState({ user_name: null, avatar_url: null, isShowAvatar: false, });
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          readPermissions={['public_profile',]}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log(error.message);
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                console.log(data.accessToken.toString());

                const processRequest = new GraphRequest(
                  '/me?fields=name,picture.type(large)',
                  null,
                  this.getInfoResponse
                );
                // Start the graph request.
                new GraphRequestManager().addRequest(processRequest).start();
              });
            }
          }}
          onLogoutFinished={this.onLogout}
        />

        <StyledButton
          title={'Login with Facebook'}
          textColor={'white'}
          backgroundColor={Colors.accent}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
