import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { Metrics, Colors, } from 'src/theme';
import CardOrder from './CardOrder';
export default class QRCodeScreen extends Component {
  render() {
    const { data, } = this.props;
    return (
      <View style={styles.container}>
        <QRCode value={data.id} size={200} />
        <CardOrder data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    paddingHorizontal: Metrics.getBaseUnitFactor(2),
    paddingTop: Metrics.getBaseUnitFactor(4),
    backgroundColor: Colors.background,
  },
});
