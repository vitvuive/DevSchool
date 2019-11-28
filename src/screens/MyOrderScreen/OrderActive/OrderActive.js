import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Colors, } from 'src/theme';

import CardOrderItem from '../CardOrderItem';

export default class OrderActive extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardOrderItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
