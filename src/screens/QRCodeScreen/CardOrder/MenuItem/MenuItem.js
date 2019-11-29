import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import { StyleText, } from 'src/shared-components';
import { Metrics, Colors, } from 'src/theme';
export default class MenuItem extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.amoutView}>
            <StyleText primary medium>
              {'1X'}
            </StyleText>
          </View>
          <View style={styles.nameDishView}>
            <StyleText medium>{'Trà đào cam sả'}</StyleText>
          </View>
          <View style={styles.priceView}>
            <StyleText bold>{'40.000đ'}</StyleText>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.amoutView}>
            <StyleText>{''}</StyleText>
          </View>
          <View style={styles.nameDishView}>
            <StyleText bold>{'Total'}</StyleText>
          </View>
          <View style={styles.priceView}>
            <StyleText primary bold>
              {'40.000đ'}
            </StyleText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: Metrics.getBaseUnitFactor(),
    padding: Metrics.getBaseUnitFactor(),
    borderTopColor: Colors.border,
    borderTopWidth: 0.5,
  },
  amoutView: {
    width: '15%',
  },
  nameDishView: {
    width: '60%',
  },
  priceView: {
    width: '25%',
  },
});
