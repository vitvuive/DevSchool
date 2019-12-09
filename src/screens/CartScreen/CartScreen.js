import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';

import { StyledButton, StyleText, } from 'src/shared-components';
import { Metrics, Colors, } from 'src/theme';
import { Formatters, } from 'src/services';

import ListCart from './ListCart';

export default class CartScreen extends Component {
  render() {
    const { onCheckout, dataCart, sumPriceItem, } = this.props;
    return (
      <View style={styles.container}>
        <ListCart dataCart={dataCart} />
        <View style={styles.wrapperTotal}>
          <View style={styles.rowTotal}>
            <StyleText bold>{'Subtotal'}</StyleText>
            <StyleText bold>{Formatters.displayPrice(sumPriceItem)}</StyleText>
          </View>
          <View style={styles.rowTotal}>
            <StyleText bold>{'Shipping'}</StyleText>
            <StyleText bold>{Formatters.displayPrice(0)}</StyleText>
          </View>
          <View style={styles.rowTotal}>
            <StyleText bold>{'Total'}</StyleText>
            <StyleText bold>{Formatters.displayPrice(sumPriceItem)}</StyleText>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton title={'CHECK OUT'} onPress={onCheckout} />
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  wrapperTotal: {
    paddingBottom: Metrics.getBaseUnitFactor(8),
    paddingHorizontal: Metrics.getBaseUnitFactor(2),
  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
