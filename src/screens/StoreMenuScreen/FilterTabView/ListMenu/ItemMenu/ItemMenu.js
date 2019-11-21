import React, { Component, } from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import { ImageAssets, } from 'src/assets';
import { Metrics, Colors, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

const WIDTH_ITEM =
  (Dimensions.get('window').width - Metrics.getBaseUnitFactor(6)) / 2;
export default class ItemMenu extends Component {
  render() {
    const { name, price, componentId, onPressItem, } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPressItem(componentId)}
      >
        <Image source={ImageAssets.Card6} style={styles.imageStyle} />
        <View style={styles.nameItem}>
          <StyleText>{name}</StyleText>
          <StyleText bold size={10}>
            {price} {'đ'}
          </StyleText>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: WIDTH_ITEM,

    marginTop: Metrics.getBaseUnitFactor(2),

    borderRadius: 10,

    elevation: 4,
    justifyContent: 'space-between',
    shadowColor: Colors.primary,
    shadowRadius: 5,
    shadowOpacity: 0.75,
    shadowOffset: { width: 0, height: 0, },

    backgroundColor: '#fff',
  },
  imageStyle: {
    height: Metrics.getBaseUnitFactor(13),
    width: WIDTH_ITEM,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameItem: {
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: Metrics.getBaseUnitFactor(1),
  },
});
