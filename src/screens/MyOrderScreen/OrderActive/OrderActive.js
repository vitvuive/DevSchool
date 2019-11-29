import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Colors, } from 'src/theme';

import OrderList from '../OrderList';

export default class OrderActive extends Component {
  render() {
    const { componentId, } = this.props;
    return (
      <View style={styles.container}>
        <OrderList componentId={componentId} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
