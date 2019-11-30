import React, { Component, } from 'react';
import { View, FlatList, } from 'react-native';
import PropTypes from 'prop-types';

import CardOrderItem from './CardOrderItem';
export default class OrderList extends Component {
  static propTypes = {
    onGetTransaction: PropTypes.func.isRequired,
    dataTransaction: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  shouldComponentUpdate({ isLoading, }) {
    return this.props.isLoading !== isLoading;
  }

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
    const { dataTransaction, onGetTransaction, isLoading, } = this.props;
    return (
      <View>
        <FlatList
          data={dataTransaction}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onRefresh={onGetTransaction}
          refreshing={isLoading}
        />
      </View>
    );
  }
}
