import React, { Component, } from 'react';
import { View, StyleSheet, FlatList, } from 'react-native';
import { StyleText, } from 'src/shared-components';
import { Metrics, Colors, } from 'src/theme';
import { Formatters, } from 'src/services';
export default class MenuItem extends Component {
  _renderItem = ({ item, }) => {
    return (
      <View style={styles.container}>
        <View style={styles.nameDishView}>
          <StyleText medium primary>
            {item.name}
          </StyleText>
        </View>
        <View style={styles.priceView}>
          <StyleText bold>{Formatters.displayPrice(item.price)}</StyleText>
        </View>
      </View>
    );
  };

  _keyExtractor = ({ id, }) => id;

  render() {
    const { dataTransaction, totalPrice, } = this.props;
    return (
      <View>
        <FlatList
          data={dataTransaction.item}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />

        <View style={styles.container}>
          <View style={styles.nameDishView}>
            <StyleText bold>{'Total'}</StyleText>
          </View>
          <View style={styles.priceView}>
            <StyleText primary bold>
              {Formatters.displayPrice(totalPrice)}
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

    justifyContent: 'space-between',

    borderTopColor: Colors.border,
    borderTopWidth: 0.5,
  },
  // amoutView: {
  //   width: '10%',
  // },
  nameDishView: {
    width: '60%',
  },
  priceView: {
    width: '25%',
  },
});
