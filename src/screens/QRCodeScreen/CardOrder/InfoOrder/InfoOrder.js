import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
import { Formatters, } from 'src/services';
export default class InfoOrder extends Component {
  render() {
    const { dataTransaction, } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <StyleText gray size={10} style={styles.title}>
            {'Number order: '}
          </StyleText>
          <StyleText size={23} bold primary>
            {dataTransaction.id}
          </StyleText>
        </View>
        <View style={styles.row}>
          <StyleText gray size={10} style={styles.title}>
            {'Merchant: '}
          </StyleText>
          <StyleText medium size={15}>
            {dataTransaction.shop.merchant.name}
          </StyleText>
        </View>

        <View style={styles.row}>
          <StyleText gray size={10} style={styles.title}>
            {'Address: '}
          </StyleText>
          <StyleText medium size={13}>
            {dataTransaction.shop.address}
          </StyleText>
        </View>

        <View style={styles.row}>
          <StyleText gray size={10} style={styles.title}>
            {'Create at: '}
          </StyleText>
          <StyleText medium size={13}>
            {Formatters.displayTime(dataTransaction.created)}
          </StyleText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: Metrics.getBaseUnitFactor(),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: Metrics.getBaseUnitFactor(7),
  },
  title: {
    marginRight: Metrics.getBaseUnitFactor(2),
  },
});
