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
    return (
      <ScrollView>
        <CoverStore />
        <FilterTabView />
      </ScrollView>
    );
  }
}
