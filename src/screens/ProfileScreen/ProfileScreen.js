import React, { Component, } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { StyledButton, } from '../../shared-components';
import { Colors, } from '../../theme';
export default class ProfileScreen extends Component {
  render() {
    const { name, email, urlAvatar, onPress, } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Image source={{ uri: urlAvatar, }} style={styles.imageStyle} />
          <Text>{name}</Text>
          <Text>{email}</Text>
        </View>
        <StyledButton
          onPress={onPress}
          title={'Log out'}
          textColor={'white'}
          backgroundColor={Colors.primary}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'space-between',
  },
  info: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,

    resizeMode: 'contain',
  },
});
