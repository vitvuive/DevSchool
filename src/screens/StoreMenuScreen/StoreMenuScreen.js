import React, { Component, } from 'react';
import { ScrollView, } from 'react-native';

import CoverStore from './CoverStore';
import FilterTabView from './FilterTabView';

export default class StoreMenuScreen extends Component {
  render() {
    const { componentId, category, } = this.props;
    return (
      <ScrollView>
        <CoverStore />
        <FilterTabView componentId={componentId} category={category} />
      </ScrollView>
    );
  }
}
