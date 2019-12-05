import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Colors, } from 'src/theme';
export default class OrderHistory extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
