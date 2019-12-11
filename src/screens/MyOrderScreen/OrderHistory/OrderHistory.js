import React, { Component, } from 'react';
import { View, StyleSheet, Image, } from 'react-native';

import { Colors, Metrics, } from 'src/theme';
import { ImageAssets, } from 'src/assets';
import { StyleText, } from 'src/shared-components';
export default class OrderHistory extends Component {
  render() {
    // const { dataHistory, } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerEmpty}>
          <Image source={ImageAssets.LogoColor} style={styles.logo} />
          <StyleText color={Colors.light} semiBold size={20}>
            {'No history'}
          </StyleText>
          <StyleText color={Colors.light} semiBold size={20}>
            {'Let\'s choose promotion for you'}
          </StyleText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerEmpty: {
    paddingTop: Metrics.getBaseUnitFactor(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 70,
    width: 125,
    alignSelf: 'center',
    paddingBottom: Metrics.getBaseUnitFactor(3),
  },
});
