import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';

import { StyleText, StyledButton, } from 'src/shared-components';
import { Metrics, Colors, } from 'src/theme';

import ListCart from './ListCart';

export default class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StyleText medium size={20}>
          {'Your food cart'}
        </StyleText>
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
    paddingTop: Metrics.getBaseUnitFactor(2),
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
