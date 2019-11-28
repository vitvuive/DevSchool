import React, { Component, } from 'react';
import { FlatList, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, } from 'src/theme';
import ItemCart from './ItemCart';

export default class ListCart extends Component {
  static propType = {
    dataCart: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onGetData: PropTypes.func.isRequired,
  };

  shouldComponentUpdate({ isLoading, }) {
    return this.props.isLoading !== isLoading;
  }

  _renderItem = ({ item, }) => {
    return <ItemCart data={item} />;
  };

  _keyExtractor = ({ id, }) => id;

  render() {
    const { dataCart, onGetData, isLoading, } = this.props;
    return (
      <FlatList
        data={dataCart}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        style={styles.flatList}
        onRefresh={onGetData}
        refreshing={isLoading}
      />
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    marginBottom: Metrics.getBaseUnitFactor(6),
  },
});
