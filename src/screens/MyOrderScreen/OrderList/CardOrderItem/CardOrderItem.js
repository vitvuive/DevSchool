import React, { Component, } from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
export default class CardOrderItem extends Component {
  static propTypes = {
    onPush: PropTypes.func.isRequired,
  };

  render() {
    const { onPush, data, } = this.props;
    return (
      <View style={styles.constainer}>
        <View style={styles.title}>
          <StyleText bold>{data.nameMerchant}</StyleText>
          <StyleText medium size={13}>
            {data.address}
          </StyleText>
          <StyleText size={11}>{data.createdAt}</StyleText>
        </View>
        <View style={styles.action}>
          <TouchableOpacity onPress={onPush}>
            <StyleText primary medium>
              {'View detail'}
            </StyleText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    borderRadius: 5,
    elevation: 6,
    shadowRadius: 5,
    shadowOffset: { width: 10, height: 10, },

    paddingHorizontal: Metrics.getBaseUnitFactor(2),
    marginHorizontal: Metrics.getBaseUnitFactor(2),
    marginTop: Metrics.getBaseUnitFactor(2),
    backgroundColor: '#fff',
  },
  title: {
    marginVertical: Metrics.getBaseUnitFactor(),
    justifyContent: 'center',
  },
  action: {
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',

    borderTopWidth: 0.5,
    borderTopColor: '#D5D5D5',
  },
});
