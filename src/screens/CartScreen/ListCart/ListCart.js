import React, { Component, } from 'react';
import { View, StyleSheet, FlatList, } from 'react-native';
import PropTypes from 'prop-types';

import ItemCart from './ItemCart';
import { Metrics, } from 'src/theme';

export default class ListCart extends Component {
  static propType = {
    dataCart: PropTypes.array.isRequired,
  };

  _renderItem = ({ item, }) => {
    return <ItemCart data={item} />;
  };

  _keyExtractor = ({ id, }) => id;

  render() {
    const { dataCart, } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={dataCart}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.getBaseUnitFactor(),
  },
});
