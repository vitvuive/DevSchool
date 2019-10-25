import React, { Component, } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
export default class HomeScreen extends Component {
  state = {};
  render() {
    const { name, email, urlAvatar, onPress, } = this.props;
    return (
      <View style={styles.container}>
        <Image source={{ uri: urlAvatar, }} style={styles.imageStyle} />
        <Text>Xin chao</Text>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <TouchableOpacity style={styles.buttonLogout} onPress={onPress}>
          <Text>{'Log out'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageStyle: {
    width: 100,
    height: 100,

    resizeMode: 'contain',
  },
  buttonLogout: {
    height: 40,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
});
