import React, { Component, } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { StyledButton, StyleText, } from '../../shared-components';
import { Colors, } from '../../theme';
export default class ProfileScreen extends Component {
  render() {
    const { name, email, urlAvatar, onPress, } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.info}>
            <Image source={{ uri: urlAvatar, }} style={styles.imageStyle} />
            <StyleText white bold size={30}>
              {'Hi ' + name}
            </StyleText>
          </View>
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
    justifyContent: 'space-between',
  },
  banner: {
    height: 200,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
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
