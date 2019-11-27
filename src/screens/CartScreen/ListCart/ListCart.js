import React, { Component, } from 'react';
import { View, ScrollView, StyleSheet, } from 'react-native';

import ItemCart from './ItemCart';
import { Metrics, } from 'src/theme';

import { StyledButton, } from 'src/shared-components';

export default class ListCart extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <View style={styles.buttonContainer}>
          <StyledButton title={'CHECK OUT'} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.getBaseUnitFactor(),
  },
  buttonContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
});
