import React, { Component, } from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import { Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
export default class CardOrderItem extends Component {
  render() {
    return (
      <View style={styles.constainer}>
        <View style={styles.title}>
          <StyleText bold>{'Hight Land Hai Ba Trung'}</StyleText>
          <StyleText medium size={13}>
            {'208 Nguyễn Hữu Cảnh, Phường 22,'}
          </StyleText>
          <StyleText size={11}>{'28/12/2020, 14:14'}</StyleText>
        </View>
        <View style={styles.action}>
          <TouchableOpacity>
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
