import React, { Component, } from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, Colors, } from 'src/theme';
import { StyleText, OverlaySpinner, } from 'src/shared-components';
import { Formatters, } from 'src/services';

import CoverStore from './CoverStore';
import FilterTabView from './FilterTabView';

export default class StoreMenuScreen extends Component {
  static propType = {
    onPush: PropTypes.func.isRequired,
    numberItem: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  shouldComponentUpdate({ numberItem, isLoading, }) {
    return (
      this.props.numberItem !== numberItem || this.props.isLoading !== isLoading
    );
  }

  renderCart = () => {
    const { onPush, numberItem, sumPriceItem, } = this.props;

    return (
      <TouchableOpacity style={styles.wapperCart} onPress={onPush}>
        <View style={styles.text}>
          <StyleText primary bold>
            {numberItem}
          </StyleText>
        </View>
        <StyleText white bold>
          {'View Order'}
        </StyleText>
        <StyleText white bold>
          {Formatters.displayPrice(sumPriceItem)}
        </StyleText>
      </TouchableOpacity>
    );
  };
  render() {
    const {
      isLoading,
      componentId,
      categoryByShopId,
      numberItem,
      dataShop,
    } = this.props;
    return (
      <View style={styles.container}>
        <CoverStore title={dataShop.merchant.name} componentId={componentId} />
        <FilterTabView
          componentId={componentId}
          category={categoryByShopId}
          merchantId={dataShop.merchant.id}
          shopId={dataShop.id}
        />
        {numberItem > 0 && this.renderCart()}
        {!!isLoading && <OverlaySpinner />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wapperCart: {
    flexDirection: 'row',
    height: Metrics.getBaseUnitFactor(5),
    marginHorizontal: Metrics.getBaseUnitFactor(2),
    marginBottom: Metrics.getBaseUnitFactor(),

    justifyContent: 'space-around',
    alignItems: 'center',

    borderRadius: 5,
    shadowRadius: 5,
    elevation: 8,
    shadowOffset: { height: 10, width: 10, },

    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: Colors.primary,
  },
  text: {
    height: 20,
    width: 20,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
