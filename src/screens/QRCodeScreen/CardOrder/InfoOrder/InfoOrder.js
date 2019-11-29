import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
export default class InfoOrder extends Component {
  render() {
    const { data, } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <StyleText gray size={10} style={styles.title}>
            {'Number order: '}
          </StyleText>
          <StyleText size={23} bold primary>
            {data.id}
          </StyleText>
        </View>
        <View style={styles.row}>
          <StyleText gray size={10} style={styles.title}>
            {'Merchant: '}
          </StyleText>
          <StyleText medium size={15}>
            {data.nameMerchant}
          </StyleText>
        </View>

        <View style={styles.row}>
          <StyleText gray size={10} style={styles.title}>
            {'Address: '}
          </StyleText>
          <StyleText medium size={15}>
            {data.address}
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
  },
  title: {
    marginRight: Metrics.getBaseUnitFactor(2),
  },
});
