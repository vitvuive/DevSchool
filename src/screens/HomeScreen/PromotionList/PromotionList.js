import React, { Component, } from 'react';
import { View, } from 'react-native';

import { Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

import PromotionItem from './PromotionItem';

export default class PromotionList extends Component {
  state = {};
  render() {
    return (
      <View style={{ marginHorizontal: Metrics.getBaseUnitFactor(2), }}>
        <StyleText primary size={20}>
          {'Promotion for you today'}
        </StyleText>
        <PromotionItem />
        <PromotionItem />
        <PromotionItem />
      </View>
    );
  }
}
