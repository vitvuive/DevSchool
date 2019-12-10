import React, { Component, } from 'react';
import { StyleSheet, ScrollView, View, } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, Colors, } from 'src/theme';
import { IconAssets, } from 'src/assets';
import { StyledButton, OverlaySpinner, } from 'src/shared-components';

import ListCart from './ListCart';
import ApplyPromotion from './ApplyPromotion';
import PaymentMethod from './PaymentMethod';
import ViewTotalPrice from './ViewTotalPrice';

export default class CartScreen extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  shouldComponentUpdate({ isLoading, dataCart, sumPriceItem, }) {
    return (
      this.props.isLoading !== isLoading ||
      this.props.dataCart !== dataCart ||
      this.props.sumPriceItem !== sumPriceItem
    );
  }

  render() {
    const { onCheckout, dataCart, sumPriceItem, isLoading, } = this.props;
    return (
      <View>
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
        {isLoading && <OverlaySpinner />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.getBaseUnitFactor(2),
    backgroundColor: Colors.background,
  },
});
