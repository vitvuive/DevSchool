import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';

import { StyledButton, } from '../../shared-components';
import { Colors, } from '../../theme';
export default class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
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
