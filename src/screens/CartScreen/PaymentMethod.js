import React, { Component, } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { Colors, Metrics, } from 'src/theme';
import { IconAssets, } from 'src/assets';
import { StyleText, } from 'src/shared-components';
class PaymentMethod extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StyleText light semiBold size={15}>
          {'Payment Method'}
        </StyleText>
        <TouchableOpacity style={styles.cardPayment}>
          <Image source={IconAssets.MoMo} style={styles.icon} />
          <StyleText medium>{'Momo'}</StyleText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardPayment}>
          <Image source={IconAssets.VISA} style={styles.icon} />
          <StyleText medium>{'Credit/Debit Card'}</StyleText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardPayment}>
          <Image source={IconAssets.Paypal} style={styles.icon} />
          <StyleText medium>{'Paypal'}</StyleText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: Colors.border,
    borderTopWidth: 0.5,

    paddingVertical: Metrics.getBaseUnitFactor(2),
  },
  cardPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Metrics.getBaseUnitFactor(2),
    marginVertical: Metrics.getBaseUnitFactor(),
  },
  icon: {
    height: 30,
    width: 30,

    marginRight: Metrics.getBaseUnitFactor(2),
  },
});

export default PaymentMethod;
