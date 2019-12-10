import React, { Component, } from 'react';
import { StyleSheet, ScrollView, } from 'react-native';

import { Metrics, Colors, } from 'src/theme';
import { IconAssets, } from 'src/assets';
import { StyledButton, } from 'src/shared-components';

import ListCart from './ListCart';
import ApplyPromotion from './ApplyPromotion';
import PaymentMethod from './PaymentMethod';
import ViewTotalPrice from './ViewTotalPrice';

export default class CartScreen extends Component {
  render() {
    const { onCheckout, dataCart, sumPriceItem, } = this.props;
    return (
      <ScrollView style={styles.container}>
        <ListCart dataCart={dataCart} />
        <ApplyPromotion />
        <ViewTotalPrice sumPriceItem={sumPriceItem} />
        <PaymentMethod />
        <StyledButton
          title={'Check Out'}
          icon={IconAssets.CheckOut}
          onPress={onCheckout}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.getBaseUnitFactor(2),
    backgroundColor: Colors.background,
  },
});
