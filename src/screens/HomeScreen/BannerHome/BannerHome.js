import React, { Component, } from 'react';
import { View, } from 'react-native';
import PropsType from 'prop-types';

import { Metrics, Colors, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
export default class BannerHome extends Component {
  static propsType = {
    name: PropsType.string.isRequired,
  };

  render() {
    return (
      <View
        style={{
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        <View
          style={{
            height: 80,
            width: '70%',

            paddingVertical: Metrics.getBaseUnitFactor(),

            alignItems: 'center',
            justifyContent: 'space-around',

            borderRadius: 15,
            shadowOffset: { height: 3, width: 13, },
            elevation: 8,
            backgroundColor: Colors.primary,
          }}
        >
          <StyleText size={20} color={'white'}>
            {'Xin chào'}
          </StyleText>
          <StyleText size={30} color={'white'}>
            {this.props.name}
          </StyleText>
        </View>
      </View>
    );
  }
}
