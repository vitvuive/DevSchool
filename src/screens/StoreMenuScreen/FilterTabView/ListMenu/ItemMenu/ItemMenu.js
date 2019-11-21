import React, { Component, } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, View, } from 'react-native';
import { ImageAssets, } from 'src/assets';
import { Metrics, } from 'src/theme';
export default class ItemMenu extends Component {
  render() {
    const { name, price, componentId, onPressItem, } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPressItem(componentId)}
      >
        <View style={styles.nameItem}>
          <Image source={ImageAssets.Card6} style={styles.imageStyle} />

          <Text>{name}</Text>
        </View>
        <View>
          <Text>{price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Metrics.getBaseUnitFactor(12),

    padding: Metrics.getBaseUnitFactor(),
    marginTop: Metrics.getBaseUnitFactor(0.5),

    elevation: 8,

    justifyContent: 'space-between',
    backgroundColor: '#f5ece8',
  },
  imageStyle: {
    height: Metrics.getBaseUnitFactor(10),
    width: Metrics.getBaseUnitFactor(13),

    borderRadius: 10,
    marginRight: Metrics.getBaseUnitFactor(2),
  },
  nameItem: {
    flexDirection: 'row',
  },
});
