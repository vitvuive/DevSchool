/* eslint-disable no-console */
import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';

import { StyledButton, StyleText, } from '../../shared-components';
import { Colors, } from '../../theme';
export default class LoginScreen extends Component {
  render() {
    const { isLoading, onPress, } = this.props;
    console.log('viet' + isLoading);
    return (
      <View style={styles.container}>
        <StyleText>{''}</StyleText>
        <StyleText center bold size={25}>
          {'Delicious'}
        </StyleText>
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
    backgroundColor: '#fce4ec',
  },
});
