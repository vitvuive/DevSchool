import React, { Component, } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';

import ItemCart from './ItemCart';
import { Metrics, } from 'src/theme';

export default class ListCart extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.getBaseUnitFactor(),
  },
});
