import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { Metrics, Colors, } from 'src/theme';
import CardOrder from './CardOrder';
export default class QRCodeScreen extends Component {
  render() {
    const { dataTransaction, } = this.props;
    return (
      <View style={styles.container}>
        <QRCode value={`${dataTransaction.id}`} size={200} />
        <CardOrder dataTransaction={dataTransaction} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    paddingHorizontal: Metrics.getBaseUnitFactor(2),
    paddingVertical: Metrics.getBaseUnitFactor(6),
    backgroundColor: Colors.background,
  },
});
//
