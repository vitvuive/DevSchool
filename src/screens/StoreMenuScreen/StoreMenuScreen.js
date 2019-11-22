import React, { Component, } from 'react';
import { ScrollView, } from 'react-native';

import CoverStore from './CoverStore';
import FilterTabView from './FilterTabView';

export default class StoreMenuScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First', },
      { key: 'second', title: 'Second', },
    ],
  };

  render() {
    const { componentId, category, } = this.props;
    // eslint-disable-next-line no-console
    console.log('category, ', category);
    return (
      <ScrollView>
        <CoverStore />
        <FilterTabView componentId={componentId} category={category} />
      </ScrollView>
    );
  }
}
