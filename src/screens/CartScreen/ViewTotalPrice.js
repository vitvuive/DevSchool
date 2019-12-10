import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';

import { Formatters, } from 'src/services';
import { StyleText, } from 'src/shared-components';
import { Metrics, } from 'src/theme';
class ViewTotalPrice extends Component {
  render() {
    const { sumPriceItem, } = this.props;
    return (
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
          <StyleText primary bold>
            {'Total'}
          </StyleText>
          <StyleText primary bold>
            {Formatters.displayPrice(sumPriceItem)}
          </StyleText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperTotal: {
    paddingBottom: Metrics.getBaseUnitFactor(),
    paddingHorizontal: Metrics.getBaseUnitFactor(2),
  },
  rowTotal: {
    paddingVertical: Metrics.getBaseUnitFactor(),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ViewTotalPrice;
