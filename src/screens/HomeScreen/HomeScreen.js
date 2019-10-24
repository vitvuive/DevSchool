import React, { Component, } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
export default class HomeScreen extends Component {
  state = {};
  render() {
    const { name, email, urlAvatar, } = this.props;
    return (
      <View>
        <Image source={{ uri: urlAvatar, }} style={styles.imageStyle} />
        <Text>Xin chao</Text>
        <Text>
          {name}
          {email}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
