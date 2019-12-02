import React, { Component, } from 'react';
import { View, FlatList, } from 'react-native';

import { Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

import PromotionItem from './PromotionItem';

export default class PromotionList extends Component {
  _keyExtractor = ({ id, }) => id;

  _renderItem = ({ item, }) => {
    const { componentId, } = this.props;
    return <PromotionItem dataShop={item} componentId={componentId} />;
  };

  render() {
    const { DATA_LOCALHOST, } = this.props;
    const dataFake = DATA_LOCALHOST.results;
    // eslint-disable-next-line no-console
    console.log('vv', dataFake);
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
