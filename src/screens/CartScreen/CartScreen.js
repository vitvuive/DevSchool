import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';

import { StyledButton, } from 'src/shared-components';
import { Metrics, Colors, } from 'src/theme';

import ListCart from './ListCart';

export default class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListCart />
        <View style={styles.buttonContainer}>
          <StyledButton title={'CHECK OUT'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.getBaseUnitFactor(2),
    backgroundColor: Colors.background,
  },
  buttonContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
});
