import React, { Component, } from 'react';
import { View, FlatList, } from 'react-native';
import PropTypes from 'prop-types';

import CardOrderItem from './CardOrderItem';
export default class OrderList extends Component {
  static propTypes = {
    onGetTransaction: PropTypes.func.isRequired,
    dataTransaction: PropTypes.array,
  };

  _keyExtractor = ({ id, }) => id;

  _renderItem = ({ item, }) => {
    const { componentId, } = this.props;
    return <CardOrderItem componentId={componentId} data={item} />;
  };

  componentDidMount() {
    const { onGetTransaction, } = this.props;
    onGetTransaction && onGetTransaction();
  }

  render() {
    const { dataTransaction, } = this.props;
    return (
      <View>
        <FlatList
          data={dataTransaction}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
