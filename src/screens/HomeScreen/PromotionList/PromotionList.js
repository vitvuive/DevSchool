import React, { Component, } from 'react';
import { View, FlatList, } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, } from 'src/theme';
import {} from 'src/shared-components';

import PromotionItem from './PromotionItem';

export default class PromotionList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
    dataFake: PropTypes.array.isRequired,
  };

  shouldComponentUpdate({ isLoading, dataFake, }) {
    return (
      this.props.isLoading !== isLoading || this.props.dataFake !== dataFake
    );
  }

  _keyExtractor = ({ id, }) => id;

  _renderItem = ({ item, }) => {
    const { componentId, } = this.props;
    return <PromotionItem dataShop={item} componentId={componentId} />;
  };

  render() {
    const { dataFake, onRefresh, isLoading, } = this.props;
    return (
      <View
        style={{
          marginHorizontal: Metrics.getBaseUnitFactor(2),
          flex: 1,
        }}
      >
        <FlatList
          data={dataFake}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          onRefresh={onRefresh}
          refreshing={isLoading}
        />
      </View>
    );
  }
}
