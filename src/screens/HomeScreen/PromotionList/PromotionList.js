import React, { Component, } from 'react';
import { View, FlatList, } from 'react-native';

import { Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

import PromotionItem from './PromotionItem';

export default class PromotionList extends Component {
  _keyExtractor = ({ address, }) => address;

  _renderItem = ({ item, }) => {
    const { componentId, } = this.props;
    return <PromotionItem {...item} componentId={componentId} />;
  };

  render() {
    const { dataFake, } = this.props;
    return (
      <View style={{ marginHorizontal: Metrics.getBaseUnitFactor(2), }}>
        <StyleText primary size={16}>
          {'Promotion for you today'}
        </StyleText>
        <FlatList
          data={dataFake}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
