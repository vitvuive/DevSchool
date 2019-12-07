import React, { Component, } from 'react';
import { View, FlatList, } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

import PromotionItem from './PromotionItem';

export default class PromotionList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
    dataFake: PropTypes.array.isRequired,
  };

  shouldComponentUpdate({ isLoading, }) {
    return this.props.isLoading !== isLoading;
  }

  _keyExtractor = ({ id, }) => id;

  _renderItem = ({ item, }) => {
    const { componentId, } = this.props;
    return <PromotionItem dataShop={item} componentId={componentId} />;
  };

  render() {
    const { dataFake, onRefresh, isLoading, } = this.props;
    return (
      <View style={{ marginHorizontal: Metrics.getBaseUnitFactor(2), flex: 1, }}>
        <StyleText medium primary size={16}>
          {'Promotion for you today'}
        </StyleText>
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
