import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import PropsType from 'prop-types';

import { Metrics, Colors, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
export default class BannerHome extends Component {
  static propsType = {
    name: PropsType.string.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <StyleText size={20} color={'white'}>
            {'Xin chào'}
          </StyleText>
          <StyleText size={25} color={'white'}>
            {this.props.name}
          </StyleText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  wrapper: {
    height: 80,
    width: '70%',

    paddingVertical: Metrics.getBaseUnitFactor(),

    alignItems: 'center',
    justifyContent: 'space-around',

    borderRadius: 15,
    shadowOffset: { height: 3, width: 13, },
    elevation: 8,
    backgroundColor: Colors.primary,
  },
});
