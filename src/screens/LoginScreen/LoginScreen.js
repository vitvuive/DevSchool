/* eslint-disable no-console */
import React, { Component, } from 'react';
import { View, StyleSheet, Text, } from 'react-native';

import { StyledButton, StyleText, } from 'src/shared-components';
import { Colors, } from 'src/theme';
import { IconAssets, } from 'src/assets';
export default class LoginScreen extends Component {
  render() {
    const { onPress, isLoading, } = this.props;
    return (
      <View style={styles.container}>
        <StyleText>{''}</StyleText>
        <Text style={styles.logo}>{'DRINKING'}</Text>
        <StyledButton
          isLoading={isLoading}
          onPress={onPress}
          title={'Login with Facebook'}
          icon={IconAssets.Facebook}
          textColor={'white'}
          backgroundColor={Colors.accent}
          loadingColor={Colors.primary}
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
