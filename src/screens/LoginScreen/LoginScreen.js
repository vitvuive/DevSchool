/* eslint-disable no-console */
import React, { Component, } from 'react';
import { View, StyleSheet, Image, } from 'react-native';

import { StyledButton, StyleText, } from 'src/shared-components';
import { Colors, } from 'src/theme';
import { IconAssets, ImageAssets, } from 'src/assets';
export default class LoginScreen extends Component {
  render() {
    const { onPress, isLoading, } = this.props;
    return (
      <View style={styles.container}>
        <StyleText>{''}</StyleText>
        <Image source={ImageAssets.Logo} style={styles.imageLogo} />
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
  imageLogo: {
    height: 70,
    width: 125,
    alignSelf: 'center',
  },
});
