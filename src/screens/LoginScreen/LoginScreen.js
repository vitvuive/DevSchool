/* eslint-disable no-console */
import React, { Component, } from 'react';
import { View, StyleSheet, Text, } from 'react-native';

import { StyledButton, StyleText, } from '../../shared-components';
import { Colors, } from 'src/theme';
export default class LoginScreen extends Component {
  render() {
    const { isLoading, onPress, } = this.props;
    console.log('viet' + isLoading);
    return (
      <View style={styles.container}>
        <StyleText>{''}</StyleText>
        <Text style={styles.logo}>{'DRINKING'}</Text>
        <StyledButton
          onPress={onPress}
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
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
  },
  logo: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 40,
  },
});
