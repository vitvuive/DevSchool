import React, { Component, } from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';
import { Metrics, } from 'src/theme';

import InfoOrder from './InfoOrder';
import MenuItem from './MenuItem';
export default class CardOrder extends Component {
  render() {
    // const { data, } = this.props;
    return (
      <View style={styles.container}>
        <InfoOrder />
        <MenuItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - Metrics.getBaseUnitFactor(4),

    elevation: 6,
    shadowOffset: { width: 10, height: 10, },
    shadowRadius: 5,

    borderRadius: 5,

    marginTop: Metrics.getBaseUnitFactor(5),
    backgroundColor: '#fff',
  },
});
