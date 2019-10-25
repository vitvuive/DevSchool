import React, { Component, } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
export default class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>this is holme</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
