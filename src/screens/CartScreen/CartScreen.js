import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';

import { StyleText, } from 'src/shared-components';
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
});
