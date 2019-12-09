import React, { Component, } from 'react';
import { View, StyleSheet, ScrollView, Image, } from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
import { ImageAssets, } from 'src/assets';

import QRCodeScreen from 'src/screens/QRCodeScreen';

export default class OrderActive extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  shouldComponentUpdate({ isLoading, }) {
    return this.props.isLoading !== isLoading;
  }

  render() {
    const { dataTransaction, } = this.props;

    return (
      <ScrollView style={styles.container}>
        {!dataTransaction.id ? (
          <View style={styles.containerEmpty}>
            <Image source={ImageAssets.LogoColor} style={styles.logo} />
            <StyleText color={Colors.light} semiBold size={20}>
              {'You don have order'}
            </StyleText>
            <StyleText color={Colors.light} semiBold size={20}>
              {'Let\'s choose promotion for you'}
            </StyleText>
          </View>
        ) : (
          <QRCodeScreen dataTransaction={dataTransaction} />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerEmpty: {
    paddingTop: Metrics.getBaseUnitFactor(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 70,
    width: 125,
    alignSelf: 'center',
  },
});
