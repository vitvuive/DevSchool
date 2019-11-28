import React, { Component, } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, Colors, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

import CoverStore from './CoverStore';
import FilterTabView from './FilterTabView';

export default class StoreMenuScreen extends Component {
  static propType = {
    onPush: PropTypes.func.isRequired,
  };
  renderCart = () => {
    const { onPush, } = this.props;
    return (
      <TouchableOpacity style={styles.wapperCart} onPress={onPush}>
        <View style={styles.text}>
          <StyleText primary bold>
            {'5'}
          </StyleText>
        </View>
        <StyleText white bold>
          {'View Order'}
        </StyleText>
        <StyleText white bold>
          {'30000d'}
        </StyleText>
      </TouchableOpacity>
    );
  };
  render() {
    const { componentId, category, } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <CoverStore />
          <FilterTabView componentId={componentId} category={category} />
        </ScrollView>
        {this.renderCart()}
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
