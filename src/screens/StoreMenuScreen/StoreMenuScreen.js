import React, { Component, } from 'react';
import { ScrollView, } from 'react-native';
import {} from 'src/theme';

import CoverStore from './CoverStore';
export default class StoreMenuScreen extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <CoverStore />
      </ScrollView>
    );
  }
}
